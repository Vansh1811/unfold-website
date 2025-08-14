import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import Admin, { IAdmin } from '../models/Admin';
import logger from '../utils/logger';

export interface AuthRequest extends Request {
  user?: IAdmin;
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
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: (process.env.JWT_EXPIRES_IN || '7d') as string
  });
};

// Verify JWT Token
export const verifyToken = (token: string): JWTPayload => {
  return jwt.verify(token, process.env.JWT_SECRET!) as JWTPayload;
};

// Auth middleware with role-based access control
export const authMiddleware = (allowedRoles: string[] = []) => {
  return async (
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
          data: null,
          error: {
            message: 'Access token is required. Please log in.',
            code: 401
          }
        });
        return;
      }

      // 2) Verify token
      const decoded = verifyToken(token);

      // 3) Check if admin still exists
      const currentAdmin = await Admin.findById(decoded.id);
      if (!currentAdmin) {
        res.status(401).json({
          success: false,
          data: null,
          error: {
            message: 'The admin belonging to this token no longer exists.',
            code: 401
          }
        });
        return;
      }

      // 4) Check role permissions
      if (allowedRoles.length > 0 && !allowedRoles.includes(currentAdmin.role)) {
        res.status(403).json({
          success: false,
          data: null,
          error: {
            message: 'You do not have permission to perform this action.',
            code: 403
          }
        });
        return;
      }

      // 5) Grant access to protected route
      req.user = currentAdmin;
      next();
    } catch (error: any) {
      logger.error('Authentication error:', error);
      
      if (error.name === 'JsonWebTokenError') {
        res.status(401).json({
          success: false,
          data: null,
          error: {
            message: 'Invalid token. Please log in again.',
            code: 401
          }
        });
        return;
      }
      
      if (error.name === 'TokenExpiredError') {
        res.status(401).json({
          success: false,
          data: null,
          error: {
            message: 'Your token has expired. Please log in again.',
            code: 401
          }
        });
        return;
      }

      res.status(401).json({
        success: false,
        data: null,
        error: {
          message: 'Authentication failed',
          code: 401
        }
      });
    }
  };
};
