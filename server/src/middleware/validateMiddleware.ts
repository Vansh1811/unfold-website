import { Request, Response, NextFunction } from 'express';
import { body, validationResult } from 'express-validator';

// Custom validation response handler
export const handleValidationErrors = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({
      success: false,
      data: null,
      error: {
        message: 'Validation Error',
        code: 400,
        details: errors.array().map(error => ({
          field: error.param,
          message: error.msg,
          value: error.value
        }))
      }
    });
    return;
  }
  next();
};

// Admin validation rules
export const validateAdminRegistration = [
  body('name')
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage('Name must be between 2 and 50 characters'),
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Please provide a valid email'),
  body('password')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters long')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/)
    .withMessage('Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'),
  body('role')
    .optional()
    .isIn(['admin', 'editor'])
    .withMessage('Role must be either admin or editor'),
  handleValidationErrors
];

export const validateAdminLogin = [
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Please provide a valid email'),
  body('password')
    .notEmpty()
    .withMessage('Password is required'),
  handleValidationErrors
];

// Contact form validation
export const validateContactForm = [
  body('name')
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('Name must be between 2 and 100 characters'),
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Please provide a valid email'),
  body('phone')
    .optional()
    .isMobilePhone('any')
    .withMessage('Please provide a valid phone number'),
  body('subject')
    .trim()
    .isLength({ min: 5, max: 200 })
    .withMessage('Subject must be between 5 and 200 characters'),
  body('message')
    .trim()
    .isLength({ min: 10, max: 2000 })
    .withMessage('Message must be between 10 and 2000 characters'),
  body('serviceType')
    .optional()
    .isIn(['compliance', 'risk-management', 'governance', 'other'])
    .withMessage('Invalid service type'),
  handleValidationErrors
];

// Blog validation
export const validateBlogCreation = [
  body('title')
    .trim()
    .isLength({ min: 5, max: 200 })
    .withMessage('Title must be between 5 and 200 characters'),
  body('slug')
    .optional()
    .isSlug()
    .withMessage('Slug must be URL-friendly (only lowercase letters, numbers, and hyphens)'),
  body('summary')
    .trim()
    .isLength({ min: 20, max: 500 })
    .withMessage('Summary must be between 20 and 500 characters'),
  body('content')
    .trim()
    .isLength({ min: 50 })
    .withMessage('Content must be at least 50 characters'),
  body('tags')
    .optional()
    .isArray()
    .withMessage('Tags must be an array'),
  body('tags.*')
    .optional()
    .isLength({ max: 50 })
    .withMessage('Each tag must be 50 characters or less'),
  body('category')
    .optional()
    .trim()
    .isLength({ max: 100 })
    .withMessage('Category must be 100 characters or less'),
  body('isPublished')
    .optional()
    .isBoolean()
    .withMessage('isPublished must be a boolean'),
  body('isFeatured')
    .optional()
    .isBoolean()
    .withMessage('isFeatured must be a boolean'),
  handleValidationErrors
];

// Service validation
export const validateServiceCreation = [
  body('title')
    .trim()
    .isLength({ min: 5, max: 200 })
    .withMessage('Title must be between 5 and 200 characters'),
  body('shortDescription')
    .trim()
    .isLength({ min: 10, max: 300 })
    .withMessage('Short description must be between 10 and 300 characters'),
  body('fullDescription')
    .trim()
    .isLength({ min: 50, max: 5000 })
    .withMessage('Full description must be between 50 and 5000 characters'),
  body('category')
    .isIn(['compliance', 'risk-management', 'governance', 'consulting', 'other'])
    .withMessage('Invalid service category'),
  body('icon')
    .trim()
    .notEmpty()
    .withMessage('Service icon is required'),
  body('features')
    .optional()
    .isArray()
    .withMessage('Features must be an array'),
  body('benefits')
    .optional()
    .isArray()
    .withMessage('Benefits must be an array'),
  body('pricing.type')
    .isIn(['fixed', 'hourly', 'project-based', 'consultation'])
    .withMessage('Invalid pricing type'),
  body('pricing.description')
    .trim()
    .isLength({ min: 1, max: 300 })
    .withMessage('Pricing description is required and must be 300 characters or less'),
  handleValidationErrors
];

// Team member validation
export const validateTeamMember = [
  body('name')
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('Name must be between 2 and 100 characters'),
  body('role')
    .trim()
    .isLength({ min: 1, max: 100 })
    .withMessage('Role is required and must be 100 characters or less'),
  body('bio')
    .trim()
    .isLength({ min: 10, max: 1000 })
    .withMessage('Bio must be between 10 and 1000 characters'),
  body('contactEmail')
    .optional()
    .isEmail()
    .normalizeEmail()
    .withMessage('Please provide a valid contact email'),
  body('order')
    .optional()
    .isInt({ min: 0 })
    .withMessage('Order must be a non-negative integer'),
  handleValidationErrors
];
