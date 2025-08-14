import { Request, Response } from 'express';
import User from '../models/User.model';
import { generateToken, AuthRequest } from '../middleware/auth.middleware';
import logger from '../utils/logger';

// Helper function to send token response
const createSendToken = (user: any, statusCode: number, res: Response) => {
  const token = generateToken(user._id);
  
  // Remove password from output
  user.password = undefined;
  
  res.status(statusCode).json({
    success: true,
    token,
    data: {
      user
    }
  });
};

// @desc    Register new user
// @route   POST /api/auth/register
// @access  Public
export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, password, role } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(400).json({
        success: false,
        message: 'User with this email already exists'
      });
      return;
    }

    // Create user
    const user = await User.create({
      name,
      email,
      password,
      role: role || 'user' // Default to 'user' if no role specified
    });

    logger.info(`New user registered: ${email}`);
    createSendToken(user, 201, res);
  } catch (error: any) {
    logger.error('Registration error:', error);
    
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map((val: any) => val.message);
      res.status(400).json({
        success: false,
        message: 'Validation Error',
        errors
      });
      return;
    }

    res.status(500).json({
      success: false,
      message: 'Server Error'
    });
  }
};

// @desc    Login user
// @route   POST /api/auth/login
// @access  Public
export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    // 1) Check if email and password exist
    if (!email || !password) {
      res.status(400).json({
        success: false,
        message: 'Please provide email and password'
      });
      return;
    }

    // 2) Check if user exists && password is correct
    const user = await User.findOne({ email }).select('+password');

    if (!user || !(await user.comparePassword(password))) {
      res.status(401).json({
        success: false,
        message: 'Incorrect email or password'
      });
      return;
    }

    // 3) Check if user is active
    if (!user.isActive) {
      res.status(401).json({
        success: false,
        message: 'Your account has been deactivated. Please contact support.'
      });
      return;
    }

    // 4) Update last login
    user.lastLogin = new Date();
    await user.save({ validateBeforeSave: false });

    logger.info(`User logged in: ${email}`);
    
    // 5) If everything ok, send token to client
    createSendToken(user, 200, res);
  } catch (error: any) {
    logger.error('Login error:', error);
    res.status(500).json({
      success: false,
      message: 'Server Error'
    });
  }
};

// @desc    Get current logged in user
// @route   GET /api/auth/me
// @access  Private
export const getMe = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const user = await User.findById(req.user!._id);
    
    res.status(200).json({
      success: true,
      data: {
        user
      }
    });
  } catch (error: any) {
    logger.error('Get me error:', error);
    res.status(500).json({
      success: false,
      message: 'Server Error'
    });
  }
};

// @desc    Update user details
// @route   PUT /api/auth/updatedetails
// @access  Private
export const updateDetails = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const fieldsToUpdate = {
      name: req.body.name,
      email: req.body.email
    };

    const user = await User.findByIdAndUpdate(req.user!._id, fieldsToUpdate, {
      new: true,
      runValidators: true
    });

    res.status(200).json({
      success: true,
      data: {
        user
      }
    });
  } catch (error: any) {
    logger.error('Update details error:', error);
    
    if (error.code === 11000) {
      res.status(400).json({
        success: false,
        message: 'Email already exists'
      });
      return;
    }

    res.status(500).json({
      success: false,
      message: 'Server Error'
    });
  }
};

// @desc    Update password
// @route   PUT /api/auth/updatepassword
// @access  Private
export const updatePassword = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { currentPassword, newPassword } = req.body;

    if (!currentPassword || !newPassword) {
      res.status(400).json({
        success: false,
        message: 'Please provide both current and new password'
      });
      return;
    }

    // Get user with password
    const user = await User.findById(req.user!._id).select('+password');

    // Check current password
    if (!(await user!.comparePassword(currentPassword))) {
      res.status(401).json({
        success: false,
        message: 'Current password is incorrect'
      });
      return;
    }

    // Update password
    user!.password = newPassword;
    await user!.save();

    createSendToken(user, 200, res);
  } catch (error: any) {
    logger.error('Update password error:', error);
    res.status(500).json({
      success: false,
      message: 'Server Error'
    });
  }
};

// @desc    Logout user
// @route   POST /api/auth/logout
// @access  Private
export const logout = async (req: AuthRequest, res: Response): Promise<void> => {
  res.status(200).json({
    success: true,
    message: 'Logged out successfully'
  });
};
