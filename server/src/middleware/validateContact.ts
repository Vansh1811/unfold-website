import { Request, Response, NextFunction } from 'express';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[0-9+\-()\s]{7,20}$/;

const allowedServices = [
  'us-incorporation-compliance',
  'tax-compliance',
  'legal-compliance',
  'business-registration',
  'other',
];

const allowedSubcategories = [
  'us-agreement-drafting',
  'gst-registration',
  'roc-filing',
  'trademark',
  'other',
];

const normalize = (value: unknown) =>
  typeof value === 'string' ? value.trim() : '';

export const validateContact = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const name = normalize(req.body.name);
  const email = normalize(req.body.email).toLowerCase();
  const phone = normalize(req.body.phone);
  const company = normalize(req.body.company);
  const service = normalize(req.body.service);
  const serviceSubcategory = normalize(req.body.serviceSubcategory);
  const message = normalize(req.body.message);

  const errors: string[] = [];

  if (!name || name.length < 2 || name.length > 80) {
    errors.push('Name must be between 2 and 80 characters');
  }

  if (!emailRegex.test(email) || email.length > 120) {
    errors.push('Valid email is required');
  }

  if (!phoneRegex.test(phone)) {
    errors.push('Valid phone number is required');
  }

  if (company && company.length > 120) {
    errors.push('Company must be under 120 characters');
  }

  if (service && !allowedServices.includes(service)) {
    errors.push('Invalid service selected');
  }

  if (serviceSubcategory && !allowedSubcategories.includes(serviceSubcategory)) {
    errors.push('Invalid service subcategory selected');
  }

  if (!message || message.length < 10 || message.length > 2000) {
    errors.push('Message must be between 10 and 2000 characters');
  }

  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      error: {
        message: 'Validation failed',
        code: 400,
        details: errors,
      },
    });
  }

  req.body = {
    name,
    email,
    phone,
    company,
    service,
    serviceSubcategory,
    message,
  };

  next();
};