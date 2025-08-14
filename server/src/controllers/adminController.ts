import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Admin from '../models/Admin';
import { AuthRequest } from '../middleware/authMiddleware';
import logger from '../utils/logger';

// Helper function to generate JWT token
const generateToken = (id: string): string => {
  return jwt.sign({ id }, process.env.JWT_SECRET!, {
    expiresIn: process.env.JWT_EXPIRES_IN || '7d',
  });
};

// Helper function to send token response
const createSendToken = (admin: any, statusCode: number, res: Response) => {
  const token = generateToken(admin._id);
  
  // Remove password from output
  admin.password = undefined;
  
  res.status(statusCode).json({
    success: true,
    data: {
      token,
      admin
    },
    error: null
  });
};

// @desc    Register new admin (super admin only)
// @route   POST /api/admin/register
// @access  Private (admin only)
export const register = async (req: AuthRequest, res: Response, next: (arg0: unknown) => void): Promise<void> => {
  try {
    const { name, email, password, role } = req.body;

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      res.status(400).json({
        success: false,
        data: null,
        error: {
          message: 'Admin with this email already exists',
          code: 400
        }
      });
      return;
    }

    // Create admin
    const admin = await Admin.create({
      name,
      email,
      password,
      role: role || 'editor'
    });

    logger.info(`New admin registered: ${email}`);
    createSendToken(admin, 201, res);
  } catch (error: any) {
    logger.error('Admin registration error:', error);
    
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map((val: any) => val.message);
      res.status(400).json({
        success: false,
        data: null,
        error: {
          message: 'Validation Error',
          code: 400,
          details: errors
        }
      });
      return;
    }

    res.status(500).json({
      success: false,
      data: null,
      error: {
        message: 'Server Error',
        code: 500
      }
    });
  }
};

// @desc    Login admin
// @route   POST /api/admin/login
// @access  Public
export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    // 1) Check if email and password exist
    if (!email || !password) {
      res.status(400).json({
        success: false,
        data: null,
        error: {
          message: 'Please provide email and password',
          code: 400
        }
      });
      return;
    }

    // 2) Check if admin exists && password is correct
    const admin = await Admin.findOne({ email }).select('+password');

    if (!admin || !(await admin.comparePassword(password))) {
      res.status(401).json({
        success: false,
        data: null,
        error: {
          message: 'Incorrect email or password',
          code: 401
        }
      });
      return;
    }

    logger.info(`Admin logged in: ${email}`);
    
    // 3) If everything ok, send token to client
    createSendToken(admin, 200, res);
  } catch (error: any) {
    logger.error('Admin login error:', error);
    res.status(500).json({
      success: false,
      data: null,
      error: {
        message: 'Server Error',
        code: 500
      }
    });
  }
};

// @desc    Get current logged in admin
// @route   GET /api/admin/profile
// @access  Private
export const getProfile = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const admin = await Admin.findById(req.user!._id);
    
    res.status(200).json({
      success: true,
      data: {
        admin
      },
      error: null
    });
  } catch (error: any) {
    logger.error('Get admin profile error:', error);
    res.status(500).json({
      success: false,
      data: null,
      error: {
        message: 'Server Error',
        code: 500
      }
    });
  }
};

// @desc    Update admin profile
// @route   PUT /api/admin/profile
// @access  Private
export const updateProfile = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const fieldsToUpdate = {
      name: req.body.name,
      email: req.body.email
    };

    const admin = await Admin.findByIdAndUpdate(req.user!._id, fieldsToUpdate, {
      new: true,
      runValidators: true
    });

    res.status(200).json({
      success: true,
      data: {
        admin
      },
      error: null
    });
  } catch (error: any) {
    logger.error('Update admin profile error:', error);
    
    if (error.code === 11000) {
      res.status(400).json({
        success: false,
        data: null,
        error: {
          message: 'Email already exists',
          code: 400
        }
      });
      return;
    }

    res.status(500).json({
      success: false,
      data: null,
      error: {
        message: 'Server Error',
        code: 500
      }
    });
  }
};

// @desc    List all admins (admin only)
// @route   GET /api/admin/list
// @access  Private (admin only)
export const listAdmins = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const admins = await Admin.find().select('-password').sort({ createdAt: -1 });
    
    res.status(200).json({
      success: true,
      data: {
        admins,
        count: admins.length
      },
      error: null
    });
  } catch (error: any) {
    logger.error('List admins error:', error);
    res.status(500).json({
      success: false,
      data: null,
      error: {
        message: 'Server Error',
        code: 500
      }
    });
  }
};
