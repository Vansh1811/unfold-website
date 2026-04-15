import winston from 'winston';
import path from 'path';
import fs from 'fs';
import { config, isProduction } from '../config/index';

const logsDir = path.join(process.cwd(), 'logs');
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir, { recursive: true });
}

const productionFormat = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  winston.format.errors({ stack: true }),
  winston.format.json()
);

const developmentFormat = winston.format.combine(
  winston.format.colorize(),
  winston.format.timestamp({ format: 'HH:mm:ss' }),
  winston.format.errors({ stack: true }),
  winston.format.printf(({ timestamp, level, message, ...meta }) => {
    const metaString = Object.keys(meta).length ? '\n' + JSON.stringify(meta, null, 2) : '';
    return `${timestamp} ${level}: ${message}${metaString}`;
  })
);

const logger = winston.createLogger({
  level: config.logging.level,
  format: isProduction() ? productionFormat : developmentFormat,
  defaultMeta: {
    service: 'unfold-backend',
    environment: config.nodeEnv,
  },
  transports: [
    new winston.transports.File({
      filename: path.join(logsDir, 'error.log'),
      level: 'error',
      maxsize: 5242880,
      maxFiles: 10,
    }),
    new winston.transports.File({
      filename: path.join(logsDir, 'combined.log'),
      maxsize: 5242880,
      maxFiles: 10,
    }),
  ],
  exceptionHandlers: [
    new winston.transports.File({
      filename: path.join(logsDir, 'exceptions.log'),
      maxsize: 5242880,
      maxFiles: 5,
    }),
    new winston.transports.Console({ format: productionFormat }),
  ],
  rejectionHandlers: [
    new winston.transports.File({
      filename: path.join(logsDir, 'rejections.log'),
      maxsize: 5242880,
      maxFiles: 5,
    }),
    new winston.transports.Console({ format: productionFormat }),
  ],
});

// Always add console transport — show all levels in dev, errors-only in prod
logger.add(
  new winston.transports.Console({
    format: isProduction() ? productionFormat : developmentFormat,
    level: isProduction() ? 'error' : 'debug',
    silent: false,
  })
);

export const httpLogStream = {
  write: (message: string) => logger.info(message.trim(), { type: 'http' }),
};

export default logger;