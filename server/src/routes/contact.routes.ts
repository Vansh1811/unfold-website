import { Router, Request, Response } from 'express';
import {
  submitContactForm,
  contactValidationRules,
} from '../controllers/contact.controller';

const router = Router();

// POST /api/v1/contact/submit
router.post('/submit', contactValidationRules, submitContactForm);

// GET /api/v1/contact/health
router.get('/health', (_req: Request, res: Response) => {
  res.json({ success: true, message: 'Contact service is running' });
});

export default router;