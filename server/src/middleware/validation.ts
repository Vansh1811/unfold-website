import { body, param, query, validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

// Middleware to handle validation results
export const handleValidationErrors = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors: errors.array().map(error => ({
        field: error.type === 'field' ? error.path : 'unknown',
        message: error.msg,
        value: error.type === 'field' ? error.value : undefined
      }))
    });
  }
  next();
};

// Admin validation rules
export const validateAdminRegistration = [
  body('name')
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage('Name must be between 2 and 50 characters')
    .matches(/^[a-zA-Z\s]+$/)
    .withMessage('Name can only contain letters and spaces'),
  
  body('email')
    .isEmail()
    .withMessage('Please provide a valid email address')
    .normalizeEmail(),
  
  body('password')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters long')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/)
    .withMessage('Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character'),
  
  body('role')
    .optional()
    .isIn(['admin', 'editor'])
    .withMessage('Role must be either admin or editor'),
  
  handleValidationErrors
];

export const validateAdminLogin = [
  body('email')
    .isEmail()
    .withMessage('Please provide a valid email address')
    .normalizeEmail(),
  
  body('password')
    .notEmpty()
    .withMessage('Password is required'),
  
  handleValidationErrors
];

export const validateAdminUpdate = [
  body('name')
    .optional()
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage('Name must be between 2 and 50 characters')
    .matches(/^[a-zA-Z\s]+$/)
    .withMessage('Name can only contain letters and spaces'),
  
  body('email')
    .optional()
    .isEmail()
    .withMessage('Please provide a valid email address')
    .normalizeEmail(),
  
  body('currentPassword')
    .optional()
    .notEmpty()
    .withMessage('Current password is required when updating password'),
  
  body('newPassword')
    .optional()
    .isLength({ min: 8 })
    .withMessage('New password must be at least 8 characters long')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/)
    .withMessage('New password must contain at least one lowercase letter, one uppercase letter, one number, and one special character'),
  
  handleValidationErrors
];

// Blog validation rules
export const validateBlogCreate = [
  body('title')
    .trim()
    .isLength({ min: 5, max: 200 })
    .withMessage('Title must be between 5 and 200 characters'),
  
  body('summary')
    .trim()
    .isLength({ min: 20, max: 500 })
    .withMessage('Summary must be between 20 and 500 characters'),
  
  body('content')
    .trim()
    .isLength({ min: 50 })
    .withMessage('Content must be at least 50 characters'),
  
  body('slug')
    .optional()
    .trim()
    .matches(/^[a-z0-9-]+$/)
    .withMessage('Slug can only contain lowercase letters, numbers, and hyphens'),
  
  body('coverImage')
    .optional()
    .isURL()
    .withMessage('Cover image must be a valid URL'),
  
  body('tags')
    .optional()
    .isArray()
    .withMessage('Tags must be an array'),
  
  body('tags.*')
    .optional()
    .trim()
    .isLength({ max: 50 })
    .withMessage('Each tag cannot exceed 50 characters'),
  
  body('category')
    .optional()
    .trim()
    .isLength({ max: 50 })
    .withMessage('Category cannot exceed 50 characters'),
  
  body('isPublished')
    .optional()
    .isBoolean()
    .withMessage('isPublished must be a boolean'),
  
  body('isFeatured')
    .optional()
    .isBoolean()
    .withMessage('isFeatured must be a boolean'),
  
  body('metaTitle')
    .optional()
    .trim()
    .isLength({ max: 60 })
    .withMessage('Meta title cannot exceed 60 characters'),
  
  body('metaDescription')
    .optional()
    .trim()
    .isLength({ max: 160 })
    .withMessage('Meta description cannot exceed 160 characters'),
  
  handleValidationErrors
];

export const validateBlogUpdate = [
  param('id')
    .isMongoId()
    .withMessage('Invalid blog ID'),
  
  body('title')
    .optional()
    .trim()
    .isLength({ min: 5, max: 200 })
    .withMessage('Title must be between 5 and 200 characters'),
  
  body('summary')
    .optional()
    .trim()
    .isLength({ min: 20, max: 500 })
    .withMessage('Summary must be between 20 and 500 characters'),
  
  body('content')
    .optional()
    .trim()
    .isLength({ min: 50 })
    .withMessage('Content must be at least 50 characters'),
  
  body('slug')
    .optional()
    .trim()
    .matches(/^[a-z0-9-]+$/)
    .withMessage('Slug can only contain lowercase letters, numbers, and hyphens'),
  
  body('coverImage')
    .optional()
    .isURL()
    .withMessage('Cover image must be a valid URL'),
  
  body('tags')
    .optional()
    .isArray()
    .withMessage('Tags must be an array'),
  
  body('tags.*')
    .optional()
    .trim()
    .isLength({ max: 50 })
    .withMessage('Each tag cannot exceed 50 characters'),
  
  body('category')
    .optional()
    .trim()
    .isLength({ max: 50 })
    .withMessage('Category cannot exceed 50 characters'),
  
  body('isPublished')
    .optional()
    .isBoolean()
    .withMessage('isPublished must be a boolean'),
  
  body('isFeatured')
    .optional()
    .isBoolean()
    .withMessage('isFeatured must be a boolean'),
  
  body('metaTitle')
    .optional()
    .trim()
    .isLength({ max: 60 })
    .withMessage('Meta title cannot exceed 60 characters'),
  
  body('metaDescription')
    .optional()
    .trim()
    .isLength({ max: 160 })
    .withMessage('Meta description cannot exceed 160 characters'),
  
  handleValidationErrors
];

export const validateBlogId = [
  param('id')
    .isMongoId()
    .withMessage('Invalid blog ID'),
  
  handleValidationErrors
];

// Team validation rules
export const validateTeamCreate = [
  body('name')
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage('Name must be between 2 and 50 characters')
    .matches(/^[a-zA-Z\s]+$/)
    .withMessage('Name can only contain letters and spaces'),
  
  body('position')
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('Position must be between 2 and 100 characters'),
  
  body('bio')
    .optional()
    .trim()
    .isLength({ max: 500 })
    .withMessage('Bio cannot exceed 500 characters'),
  
  body('image')
    .optional()
    .isURL()
    .withMessage('Image must be a valid URL'),
  
  body('socialLinks')
    .optional()
    .isObject()
    .withMessage('Social links must be an object'),
  
  body('socialLinks.linkedin')
    .optional()
    .isURL()
    .withMessage('LinkedIn URL must be valid'),
  
  body('socialLinks.twitter')
    .optional()
    .isURL()
    .withMessage('Twitter URL must be valid'),
  
  body('socialLinks.github')
    .optional()
    .isURL()
    .withMessage('GitHub URL must be valid'),
  
  handleValidationErrors
];

export const validateTeamUpdate = [
  param('id')
    .isMongoId()
    .withMessage('Invalid team member ID'),
  
  body('name')
    .optional()
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage('Name must be between 2 and 50 characters')
    .matches(/^[a-zA-Z\s]+$/)
    .withMessage('Name can only contain letters and spaces'),
  
  body('position')
    .optional()
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('Position must be between 2 and 100 characters'),
  
  body('bio')
    .optional()
    .trim()
    .isLength({ max: 500 })
    .withMessage('Bio cannot exceed 500 characters'),
  
  body('image')
    .optional()
    .isURL()
    .withMessage('Image must be a valid URL'),
  
  body('socialLinks')
    .optional()
    .isObject()
    .withMessage('Social links must be an object'),
  
  body('socialLinks.linkedin')
    .optional()
    .isURL()
    .withMessage('LinkedIn URL must be valid'),
  
  body('socialLinks.twitter')
    .optional()
    .isURL()
    .withMessage('Twitter URL must be valid'),
  
  body('socialLinks.github')
    .optional()
    .isURL()
    .withMessage('GitHub URL must be valid'),
  
  handleValidationErrors
];

export const validateTeamId = [
  param('id')
    .isMongoId()
    .withMessage('Invalid team member ID'),
  
  handleValidationErrors
];

// Service validation rules
export const validateServiceCreate = [
  body('title')
    .trim()
    .isLength({ min: 5, max: 100 })
    .withMessage('Title must be between 5 and 100 characters'),
  
  body('description')
    .trim()
    .isLength({ min: 20 })
    .withMessage('Description must be at least 20 characters'),
  
  body('image')
    .optional()
    .isURL()
    .withMessage('Image must be a valid URL'),
  
  handleValidationErrors
];

export const validateServiceUpdate = [
  param('id')
    .isMongoId()
    .withMessage('Invalid service ID'),
  
  body('title')
    .optional()
    .trim()
    .isLength({ min: 5, max: 100 })
    .withMessage('Title must be between 5 and 100 characters'),
  
  body('description')
    .optional()
    .trim()
    .isLength({ min: 20 })
    .withMessage('Description must be at least 20 characters'),
  
  body('image')
    .optional()
    .isURL()
    .withMessage('Image must be a valid URL'),
  
  handleValidationErrors
];

export const validateServiceId = [
  param('id')
    .isMongoId()
    .withMessage('Invalid service ID'),
  
  handleValidationErrors
];

// Contact validation rules
export const validateContactCreate = [
  body('name')
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage('Name must be between 2 and 50 characters')
    .matches(/^[a-zA-Z\s]+$/)
    .withMessage('Name can only contain letters and spaces'),
  
  body('email')
    .isEmail()
    .withMessage('Please provide a valid email address')
    .normalizeEmail(),
  
  body('subject')
    .trim()
    .isLength({ min: 5, max: 100 })
    .withMessage('Subject must be between 5 and 100 characters'),
  
  body('message')
    .trim()
    .isLength({ min: 10, max: 1000 })
    .withMessage('Message must be between 10 and 1000 characters'),
  
  handleValidationErrors
];

export const validateContactUpdate = [
  param('id')
    .isMongoId()
    .withMessage('Invalid contact ID'),
  
  body('status')
    .optional()
    .isIn(['new', 'in progress', 'completed'])
    .withMessage('Status must be new, in progress, or completed'),
  
  handleValidationErrors
];

export const validateContactId = [
  param('id')
    .isMongoId()
    .withMessage('Invalid contact ID'),
  
  handleValidationErrors
];

// Query validation rules
export const validatePagination = [
  query('page')
    .optional()
    .isInt({ min: 1 })
    .withMessage('Page must be a positive integer'),
  
  query('limit')
    .optional()
    .isInt({ min: 1, max: 100 })
    .withMessage('Limit must be between 1 and 100'),
  
  handleValidationErrors
];

export const validateBlogQuery = [
  query('category')
    .optional()
    .trim()
    .isLength({ max: 50 })
    .withMessage('Category cannot exceed 50 characters'),
  
  query('tag')
    .optional()
    .trim()
    .isLength({ max: 50 })
    .withMessage('Tag cannot exceed 50 characters'),
  
  query('search')
    .optional()
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('Search term must be between 2 and 100 characters'),
  
  query('published')
    .optional()
    .isBoolean()
    .withMessage('Published must be a boolean'),
  
  query('featured')
    .optional()
    .isBoolean()
    .withMessage('Featured must be a boolean'),
  
  handleValidationErrors
];
