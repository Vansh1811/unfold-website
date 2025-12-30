import { Router, Request, Response } from 'express';
import rateLimit from 'express-rate-limit';
import { submitContactForm } from '../controllers/contact.controller';

const router = Router();

// Rate limiting for contact form submissions
const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 3,
  message: { error: 'Too many submissions. Try again later.' },
  standardHeaders: true,
  legacyHeaders: false,
});

// Public route - Submit contact form
router.post('/submit', contactLimiter, submitContactForm);

// Health check
router.get('/health', (req: Request, res: Response) => {
  res.json({ success: true, message: 'Contact service is running' });
});

export default router;
