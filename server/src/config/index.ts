import dotenv from 'dotenv';

dotenv.config();

// Validate required environment variables FIRST
const requiredEnvVars = [
  'JWT_SECRET',
  'MONGODB_URI',
  'SMTP_USER',
  'SMTP_PASS',
  'ADMIN_EMAIL'
];

for (const envVar of requiredEnvVars) {
  if (!process.env[envVar]) {
    console.error(`❌ Required environment variable ${envVar} is not set`);
    if (process.env.NODE_ENV === 'production') {
      process.exit(1);
    }
  }
}

// Configuration object with type safety
export const config = {
  // Server Configuration
  port: parseInt(process.env.PORT || '5000', 10),
  nodeEnv: process.env.NODE_ENV || 'development',

  // Database Configuration
  database: {
    uri: process.env.MONGODB_URI!,
    options: {
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    }
  },

  // JWT Configuration
  jwt: {
    secret: process.env.JWT_SECRET!,
    expiresIn: process.env.JWT_EXPIRES_IN || '7d',
    issuer: 'unfold-finleg-solutions',
    audience: 'unfold-admin-panel'
  },

  // CORS Configuration
  cors: {
    origins: process.env.CORS_ORIGIN?.split(',') || ['http://localhost:3000', 'http://localhost:5173'],
    credentials: true
  },

  // Rate Limiting Configuration
  rateLimit: {
    windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '900000', 10),
    max: parseInt(process.env.RATE_LIMIT_MAX || '100', 10),
    message: 'Too many requests from this IP, please try again later.'
  },

  // Email Configuration - FIXED TO MATCH YOUR .ENV
  email: {
    host: process.env.SMTP_HOST || 'mail.unfoldfinlegsolutions.com',
    port: parseInt(process.env.SMTP_PORT || '465', 10),
    secure: process.env.SMTP_PORT === '465', // true for 465, false for 587
    auth: {
      user: process.env.SMTP_USER!,
      pass: process.env.SMTP_PASS!
    },
    from: process.env.SMTP_FROM || '"Unfold Finleg Solutions" <info@unfoldfinlegsolutions.com>',
    adminEmail: process.env.ADMIN_EMAIL || 'info@unfoldfinlegsolutions.com'
  },

  // Security Configuration
  security: {
    bcryptRounds: 12,
    maxLoginAttempts: 5,
    lockoutTime: 15 * 60 * 1000, // 15 minutes
  },

  // File Upload Configuration
  upload: {
    maxFileSize: 10 * 1024 * 1024, // 10MB
    allowedMimeTypes: ['image/jpeg', 'image/png', 'image/webp', 'application/pdf'],
    uploadDir: process.env.UPLOAD_DIR || './uploads'
  },

  // Logging Configuration
  logging: {
    level: process.env.LOG_LEVEL || 'info',
    directory: process.env.LOG_DIR || './logs',
    maxFiles: '14d',
    maxSize: '20m'
  },

  // Application Metadata
  app: {
    name: 'Unfold Finleg Solutions API',
    version: '1.0.0',
    description: 'Backend API for Unfold Finleg Solutions - Governance and Compliance Consulting Platform'
  }
};

// Utility functions
export const isDevelopment = () => config.nodeEnv === 'development';
export const isProduction = () => config.nodeEnv === 'production';
export const isTest = () => config.nodeEnv === 'test';

export default config;
