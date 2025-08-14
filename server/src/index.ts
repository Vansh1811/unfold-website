import express, { Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import compression from 'compression';
import dotenv from 'dotenv';
import config, { isProduction } from './config';
import { connectDB } from './config/database';
import logger, { httpLogStream } from './utils/logger';
import { globalErrorHandler } from './middleware/errorMiddleware';

// Import routes
import adminRoutes from './routes/adminRoutes';
import blogRoutes from './routes/blog.routes';
import contactRoutes from './routes/contact.routes';
import servicesRoutes from './routes/services.routes';
import teamRoutes from './routes/teamRoutes';

// Load environment variables
dotenv.config();

const app = express();
const PORT = config.port;

// Trust proxy
app.set('trust proxy', 1);

logger.info('🚀 Initializing server...');
console.log('🚀 Initializing server...');

// Security middleware
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
        fontSrc: ["'self'", "https://fonts.gstatic.com"],
        imgSrc: ["'self'", "data:", "https:"],
        scriptSrc: ["'self'"],
        connectSrc: ["'self'"],
      },
    },
    crossOriginEmbedderPolicy: false,
  })
);

app.use(compression());

// HTTP request logging
app.use(morgan(isProduction() ? 'combined' : 'dev', { stream: httpLogStream }));

// CORS
logger.info('🔐 Setting up CORS middleware...');
app.use(
  cors({
    origin: [
      'http://localhost:8080',   // ✅ Your frontend
      'http://localhost:5173',
      'http://localhost:3000',
      'https://unfoldfinlegsolutions.com'
    ],
    credentials: true,
    optionsSuccessStatus: 200,
  })
);


// Rate limiters
const generalLimiter = rateLimit({
  windowMs: config.rateLimit.windowMs,
  max: config.rateLimit.max,
  message: {
    success: false,
    error: {
      message: config.rateLimit.message,
      code: 429,
    },
  },
  standardHeaders: true,
  legacyHeaders: false,
});

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: {
    success: false,
    error: {
      message: 'Too many authentication attempts, try again later.',
      code: 429,
    },
  },
});

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 3,
  message: {
    success: false,
    error: {
      message: 'Too many contact form submissions, try again later.',
      code: 429,
    },
  },
});

app.use('/api', generalLimiter);
app.use('/api/v1/admin/login', authLimiter);
app.use('/api/v1/admin/register', authLimiter);
app.use('/api/v1/contact/submit', contactLimiter);

// Parsers
app.use(express.json({ limit: '10mb', strict: true }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Security headers
app.use((_req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  next();
});

// Health check
app.get('/api/v1/health', (_req: Request, res: Response) => {
  logger.info('✅ Health check endpoint hit');
  res.status(200).json({
    success: true,
    data: {
      status: 'OK',
      timestamp: new Date().toISOString(),
      environment: config.nodeEnv,
      uptime: process.uptime(),
      memory: process.memoryUsage(),
      version: config.app.version,
    },
  });
});

// API docs
app.get('/api/v1/docs', (_req: Request, res: Response) => {
  logger.info('📄 API docs requested');
  res.json({
    success: true,
    data: {
      title: config.app.name,
      version: config.app.version,
      description: config.app.description,
      endpoints: {
        admin: '/api/v1/admin',
        blogs: '/api/v1/blog',
        contact: '/api/v1/contact',
        services: '/api/v1/services',
        team: '/api/v1/team',
      },
      authentication: 'JWT Bearer Token',
      rateLimit: `${config.rateLimit.max} requests per ${config.rateLimit.windowMs / 60000} minutes`,
    },
  });
});

// Routes
logger.info('🔍 Loading API routes...');
console.log('🔍 Loading API routes...');
app.use('/api/v1/admin', adminRoutes);
app.use('/api/v1/blog', blogRoutes);
app.use('/api/v1/contact', contactRoutes);
app.use('/api/v1/services', servicesRoutes);
app.use('/api/v1/team', teamRoutes);
logger.info('✅ All API routes loaded');
console.log('✅ All API routes loaded');

// Welcome
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

// Favicon
app.get('/favicon.ico', (_req: Request, res: Response) => res.status(204).end());

// 404 handlers
app.use('/api', (req: Request, res: Response) => {
  logger.warn('404 - Route not found', { method: req.method, url: req.originalUrl });
  res.status(404).json({
    success: false,
    error: { message: `API route ${req.originalUrl} not found`, code: 404 },
  });
});

app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    error: { message: 'Resource not found', code: 404 },
  });
});

app.use(globalErrorHandler);

// Start server
const startServer = async (): Promise<void> => {
  try {
    logger.info('🔌 Connecting to MongoDB...');
    console.log('🔌 Connecting to MongoDB...');

    await connectDB();

    const server = app.listen(PORT, () => {
      logger.info(`✅ Server started on port ${PORT} in ${config.nodeEnv} mode`);
      console.log(`✅ Server started on port ${PORT} in ${config.nodeEnv} mode`);
    });

    const gracefulShutdown = (signal: string) => {
      logger.info(`🔄 Received ${signal}, shutting down gracefully...`);
      server.close((err) => {
        if (err) {
          logger.error('❌ Error during shutdown:', { error: err.message });
          process.exit(1);
        }
        logger.info('✅ Server closed successfully');
        process.exit(0);
      });
      setTimeout(() => {
        logger.error('❌ Forced shutdown after timeout');
        process.exit(1);
      }, 10000);
    };

    process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
    process.on('SIGINT', () => gracefulShutdown('SIGINT'));

  } catch (error) {
    logger.error('❌ Failed to start server:', error);
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  }
};

process.on('unhandledRejection', (err: Error) => {
  logger.error('❌ Unhandled Rejection:', { error: err.message, stack: err.stack });
  console.error('❌ Unhandled Rejection:', err);
});

process.on('uncaughtException', (err: Error) => {
  logger.error('❌ Uncaught Exception:', { error: err.message, stack: err.stack });
  console.error('❌ Uncaught Exception:', err);
});

startServer();

export default app;
 