import winston from 'winston';
import path from 'path';
import fs from 'fs';
import config, { isProduction } from '../config'; // FIXED: Import both default and named export

// Ensure logs directory exists
const logsDir = path.join(process.cwd(), 'logs');
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir, { recursive: true });
}

// Custom format for production logs
const productionFormat = winston.format.combine(
  winston.format.timestamp({
    format: 'YYYY-MM-DD HH:mm:ss',
  }),
  winston.format.errors({ stack: true }),
  winston.format.json()
);

// Custom format for development logs
const developmentFormat = winston.format.combine(
  winston.format.timestamp({
    format: 'HH:mm:ss',
  }),
  winston.format.errors({ stack: true }),
  winston.format.printf(({ timestamp, level, message, ...meta }) => {
    const metaString = Object.keys(meta).length ? `\n${JSON.stringify(meta, null, 2)}` : '';
    return `${timestamp} [${level.toUpperCase()}]: ${message}${metaString}`;
  })
);

const logger = winston.createLogger({
  level: config.logging.level,
  format: isProduction() ? productionFormat : developmentFormat, // FIXED: Use imported function
  defaultMeta: { 
    service: 'unfold-backend',
    environment: config.nodeEnv,
  },
  transports: [
    // Error log file
    new winston.transports.File({ 
      filename: path.join(logsDir, 'error.log'),
      level: 'error',
      maxsize: 5242880, // 5MB
      maxFiles: 10,
    }),
    
    // Combined log file
    new winston.transports.File({ 
      filename: path.join(logsDir, 'combined.log'),
      maxsize: 5242880, // 5MB
      maxFiles: 10,
    }),
  ],
  
  // Handle exceptions and rejections
  exceptionHandlers: [
    new winston.transports.File({ 
      filename: path.join(logsDir, 'exceptions.log'),
      maxsize: 5242880,
      maxFiles: 5,
    }),
  ],
  
  rejectionHandlers: [
    new winston.transports.File({ 
      filename: path.join(logsDir, 'rejections.log'),
      maxsize: 5242880,
      maxFiles: 5,
    }),
  ],
});

// Console logging for development
if (!isProduction()) { // FIXED: Use imported function
  logger.add(new winston.transports.Console({
    format: developmentFormat,
  }));
} else {
  // Minimal console logging for production
  logger.add(new winston.transports.Console({
    level: 'error',
    format: winston.format.simple(),
  }));
}

// Create HTTP log stream for Morgan
export const httpLogStream = {
  write: (message: string) => {
    logger.info(message.trim(), { type: 'http' });
  },
};

export default logger;