import { Request, Response, NextFunction } from 'express';
import { body, validationResult } from 'express-validator';
import { sendContactEmail, ContactData } from '../utils/emailService';
import { asyncWrapper } from '../utils/asyncWrapper';
import logger from '../utils/logger';

export const contactValidationRules = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Name is required')
    .isLength({ max: 100 })
    .withMessage('Name must be under 100 characters'),

  body('email')
    .trim()
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Invalid email address')
    .normalizeEmail(),

  body('phone')
    .trim()
    .notEmpty()
    .withMessage('Phone is required')
    .matches(/^[+\d\s\-()\/.]{7,20}$/)
    .withMessage('Invalid phone number'),

  body('message')
    .trim()
    .notEmpty()
    .withMessage('Message is required')
    .isLength({ min: 10, max: 2000 })
    .withMessage('Message must be between 10 and 2000 characters'),

  body('company')
    .optional()
    .trim()
    .isLength({ max: 100 })
    .withMessage('Company name too long'),

  body('service')
    .optional()
    .trim()
    .isLength({ max: 100 })
    .withMessage('Service name too long'),

  body('serviceSubcategory')
    .optional()
    .trim()
    .isLength({ max: 100 })
    .withMessage('Service subcategory too long'),
];

export const submitContactForm = asyncWrapper(
  async (req: Request, res: Response, _next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        error: {
          message: 'Validation failed',
          code: 400,
          details: errors.array().map((e: any) => ({
            field: e.param || 'unknown',
            message: e.msg,
          })),
        },
      });
    }

    const contactData: ContactData = {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      company: req.body.company || 'N/A',
      service: req.body.service || 'N/A',
      serviceSubcategory: req.body.serviceSubcategory || 'N/A',
      message: req.body.message,
    };

    await sendContactEmail(contactData);

    logger.info('Contact form submitted', { email: contactData.email });

    return res.status(200).json({
      success: true,
      message:
        'Your message has been sent. We will get back to you within 24 hours.',
    });
  }
);