import { Request, Response, NextFunction } from 'express';
import jwt, { Secret, SignOptions } from 'jsonwebtoken';
import User, { IUser } from '../models/User.model';
import logger from '../utils/logger';

export interface AuthRequest extends Request {
  user?: IUser;
}

interface JWTPayload {
  id: string;
  iat: number;
  exp: number;
}

// Generate JWT Token
export const generateToken = (userId: string): string => {
  if (!process.env.JWT_SECRET) {
    throw new Error('JWT_SECRET is not defined');
  }
  const options: SignOptions = {
    expiresIn: process.env.JWT_EXPIRES_IN || '7d'
  };
  return jwt.sign({ id: userId }, process.env.JWT_SECRET as string, options);
};

// Verify JWT Token
export const verifyToken = (token: string): JWTPayload => {
  return jwt.verify(token, process.env.JWT_SECRET!) as JWTPayload;
};

// Protect routes - require authentication
export const protect = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    // 1) Get token from header
    let token: string | undefined;
    
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
      res.status(401).json({
        success: false,
        message: 'You are not logged in! Please log in to get access.'
      });
      return;
    }

    // 2) Verify token
    const decoded = verifyToken(token);

    // 3) Check if user still exists
    const currentUser = await User.findById(decoded.id).select('+password');
    if (!currentUser) {
      res.status(401).json({
        success: false,
        message: 'The user belonging to this token does no longer exist.'
      });
      return;
    }

    // 4) Check if user is active
    if (!currentUser.isActive) {
      res.status(401).json({
        success: false,
        message: 'Your account has been deactivated. Please contact support.'
      });
      return;
    }

    // 5) Grant access to protected route
    req.user = currentUser;
    next();
  } catch (error: any) {
    logger.error('Authentication error:', error);
    
    if (error.name === 'JsonWebTokenError') {
      res.status(401).json({
        success: false,
        message: 'Invalid token. Please log in again!'
      });
      return;
    }
    
    if (error.name === 'TokenExpiredError') {
      res.status(401).json({
        success: false,
        message: 'Your token has expired! Please log in again.'
      });
      return;
    }

    res.status(401).json({
      success: false,
      message: 'Authentication failed'
    });
  }
};

// Restrict to specific roles
export const restrictTo = (...roles: string[]) => {
  return (req: AuthRequest, res: Response, next: NextFunction): void => {
    if (!req.user || !roles.includes(req.user.role)) {
      res.status(403).json({
        success: false,
        message: 'You do not have permission to perform this action'
      });
      return;
    }
    next();
  };
};

// Check if user is admin
export const requireAdmin = restrictTo('admin');
