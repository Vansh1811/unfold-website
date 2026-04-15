import dotenv from 'dotenv';
dotenv.config();

const requiredEnvVars = ['SMTP_USER', 'SMTP_PASS', 'ADMIN_EMAIL'];

for (const envVar of requiredEnvVars) {
  if (!process.env[envVar]) {
    console.error(`[CONFIG] Required environment variable "${envVar}" is not set`);
    if (process.env.NODE_ENV === 'production') process.exit(1);
  }
}

export const config = {
  port: parseInt(process.env.PORT || '5000', 10),
  nodeEnv: process.env.NODE_ENV || 'development',
  rateLimit: {
    windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '900000', 10),
    max: parseInt(process.env.RATE_LIMIT_MAX || '100', 10),
    message: 'Too many requests from this IP, please try again later.',
  },
  email: {
    host: process.env.SMTP_HOST || 'smtppro.zoho.in',
    port: parseInt(process.env.SMTP_PORT || '465', 10),
    secure: process.env.SMTP_PORT === '465' || process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER || '',
      pass: process.env.SMTP_PASS || '',
    },
    from: process.env.SMTP_FROM
      ? `Unfold Finleg Solutions <${process.env.SMTP_FROM}>`
      : `Unfold Finleg Solutions <${process.env.SMTP_USER || 'noreply'}>`,
    adminEmail: process.env.ADMIN_EMAIL || '',
  },
  logging: {
    level: process.env.LOG_LEVEL || 'info',
  },
  app: {
    name: 'Unfold Finleg Solutions API',
    version: '1.0.0',
    description: 'Backend API for Unfold Finleg Solutions',
  },
  database: {
    uri: process.env.MONGODB_URI || 'mongodb://localhost:27017/unfold',
  },
};

// These are FUNCTIONS — called with () — not booleans
export const isDevelopment = () => config.nodeEnv === 'development';
export const isProduction = () => config.nodeEnv === 'production';
export const isTest = () => config.nodeEnv === 'test';

export default config;