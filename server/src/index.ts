import dotenv from 'dotenv';
dotenv.config();

import express, { Request, Response, NextFunction } from 'express';
import cors, { CorsOptions } from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import compression from 'compression';

import config, { isProduction } from './config/index';
import logger, { httpLogStream } from './utils/logger';
import contactRoutes from './routes/contact.routes';
import { verifyMailer } from './utils/emailService';

const app = express();
const PORT = config.port;

app.set('trust proxy', 1);

app.use(
  helmet({
    crossOriginEmbedderPolicy: false,
  })
);

app.use(compression());

app.use(
  morgan(isProduction() ? 'combined' : 'dev', {
    stream: httpLogStream,
  })
);

const allowedOrigins = [
  'http://localhost:8080',
  'http://localhost:5173',
  'http://localhost:3000',
  'https://unfoldfinlegsolutions.com',
  'https://www.unfoldfinlegsolutions.com',
  'https://unfold-website-one.vercel.app',
];

const corsOptions: CorsOptions = {
  origin(origin, callback) {
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    return callback(new Error(`Not allowed by CORS: ${origin}`));
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

const generalLimiter = rateLimit({
  windowMs: config.rateLimit.windowMs,
  max: config.rateLimit.max,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    error: {
      message: config.rateLimit.message,
      code: 429,
    },
  },
});

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    error: {
      message: 'Too many contact form submissions, try again later.',
      code: 429,
    },
  },
});

app.use('/api', generalLimiter);
app.use('/api/v1/contact', contactLimiter);

app.use(express.json({ limit: '100kb', strict: true }));
app.use(express.urlencoded({ extended: true, limit: '100kb' }));

app.get('/api/v1/health', (_req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    data: {
      status: 'OK',
      timestamp: new Date().toISOString(),
      environment: config.nodeEnv,
      uptime: process.uptime(),
      version: config.app.version,
    },
  });
});

app.get('/api/v1/docs', (_req: Request, res: Response) => {
  res.json({
    success: true,
    data: {
      title: config.app.name,
      version: config.app.version,
      description: config.app.description,
      endpoints: {
        contact: '/api/v1/contact',
        health: '/api/v1/health',
      },
      rateLimit: `${config.rateLimit.max} requests per ${
        config.rateLimit.windowMs / 60000
      } minutes`,
    },
  });
});

app.use('/api/v1/contact', contactRoutes);

app.get('/api/v1', (_req: Request, res: Response) => {
  res.json({
    success: true,
    data: {
      message: 'Welcome to Unfold Finleg Solutions API',
      version: config.app.version,
      environment: config.nodeEnv,
      documentation: '/api/v1/docs',
      status: 'operational',
    },
  });
});

app.get('/favicon.ico', (_req: Request, res: Response) => {
  res.status(204).end();
});

app.use('/api', (req: Request, res: Response) => {
  logger.warn('API route not found', {
    method: req.method,
    url: req.originalUrl,
  });

  res.status(404).json({
    success: false,
    error: {
      message: `API route ${req.originalUrl} not found`,
      code: 404,
    },
  });
});

app.use((_req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    error: {
      message: 'Resource not found',
      code: 404,
    },
  });
});

app.use(
  (err: Error, _req: Request, res: Response, _next: NextFunction) => {
    logger.error('Unhandled server error', {
      error: err.message,
      stack: err.stack,
    });

    res.status(500).json({
      success: false,
      error: {
        message: 'Internal server error',
        code: 500,
      },
    });
  }
);

const startServer = async () => {
  try {
    logger.info('Starting server...', {
      port: PORT,
      environment: config.nodeEnv,
      smtpUser: process.env.SMTP_USER || 'missing',
      smtpHost: process.env.SMTP_HOST || 'missing',
      smtpPort: process.env.SMTP_PORT || 'missing',
    });

    const server = app.listen(PORT, () => {
      logger.info(`Server started on port ${PORT} in ${config.nodeEnv} mode`);
    });

    verifyMailer()
      .then(() => {
        logger.info('Mailer verified successfully');
      })
      .catch((error) => {
        logger.error('Mailer verification failed', {
          error: error instanceof Error ? error.message : 'Unknown error',
        });
      });

    const gracefulShutdown = (signal: string) => {
      logger.info(`Received ${signal}, shutting down gracefully...`);

      server.close((err) => {
        if (err) {
          logger.error('Error during shutdown', {
            error: err.message,
          });
          process.exit(1);
        }

        logger.info('Server closed successfully');
        process.exit(0);
      });

      setTimeout(() => {
        logger.error('Forced shutdown after timeout');
        process.exit(1);
      }, 10000);
    };

    process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
    process.on('SIGINT', () => gracefulShutdown('SIGINT'));
  } catch (error) {
    logger.error('Failed to start server', {
      error: error instanceof Error ? error.message : 'Unknown error',
    });
    process.exit(1);
  }
};

process.on('unhandledRejection', (err: unknown) => {
  logger.error('Unhandled Rejection', {
    error: err instanceof Error ? err.message : 'Unknown rejection',
  });
});

process.on('uncaughtException', (err: Error) => {
  logger.error('Uncaught Exception', {
    error: err.message,
    stack: err.stack,
  });
  process.exit(1);
});

startServer();

export default app;