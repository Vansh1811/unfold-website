import mongoose from 'mongoose';
import { config } from './index';
import logger from '../utils/logger';

export const connectDB = async (): Promise<void> => {
  try {
    logger.info('Connecting to MongoDB...', { uri: config.database.uri.replace(/:\/\/.*@/, '://***@') });

    await mongoose.connect(config.database.uri, {
      autoIndex: true,
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    });

    logger.info('MongoDB connected successfully', {
      host: mongoose.connection.host,
      database: mongoose.connection.name,
    });

    mongoose.connection.on('connected', () => logger.info('MongoDB connection established'));
    mongoose.connection.on('error', (err) => logger.error('MongoDB connection error', { err }));
    mongoose.connection.on('disconnected', () => logger.warn('MongoDB disconnected'));
  } catch (error) {
    logger.error('MongoDB connection failed', {
      message: (error as Error).message,
      stack: (error as Error).stack,
    });
    process.exit(1);
  }

  process.on('SIGINT', async () => {
    try {
      await mongoose.connection.close();
      logger.info('MongoDB connection closed due to app termination');
      process.exit(0);
    } catch (error) {
      logger.error('Error during MongoDB disconnection', { message: (error as Error).message });
      process.exit(1);
    }
  });
};