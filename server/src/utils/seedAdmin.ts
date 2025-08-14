import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import Admin from '../models/Admin';
import { connectDB } from '../config/database';
import logger from './logger';

// Seed initial admin user
export const seedAdminUser = async (): Promise<void> => {
  try {
    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ email: 'admin@unfoldfinlegsolutions.com' });
    
    if (existingAdmin) {
      logger.info('Admin user already exists');
      return;
    }

    // Create default admin user
    const adminData = {
      name: 'System Administrator',
      email: 'admin@unfoldfinlegsolutions.com',
      password: 'Admin@123456', // This will be hashed by the model
      role: 'admin' as const
    };

    const admin = await Admin.create(adminData);
    logger.info(`✅ Initial admin user created: ${admin.email}`);
    logger.info('Please change the default password after first login!');
    
  } catch (error) {
    logger.error('Error creating admin user:', error);
    throw error;
  }
};

// Standalone script to run seeding
if (require.main === module) {
  const runSeed = async () => {
    try {
      await connectDB();
      await seedAdminUser();
      process.exit(0);
    } catch (error) {
      logger.error('Seeding failed:', error);
      process.exit(1);
    }
  };
  
  runSeed();
}
