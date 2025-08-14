import { Router } from 'express';
import rateLimit from 'express-rate-limit';
import {
  submitContactForm,
  getContacts,
  getContact,
  updateContact,
  deleteContact,
  getContactStats
} from '../controllers/contact.controller';
import { authMiddleware } from '../middleware/authMiddleware';
import {
  validateContactCreate,
  validateContactUpdate,
  validateContactId,
  validatePagination
} from '../middleware/validation';

const router = Router();

// Rate limiting for contact form submissions
const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 3,
  message: { error: 'Too many submissions. Try again later.' },
  standardHeaders: true,
  legacyHeaders: false,
});

// Public route
router.post('/', contactLimiter, validateContactCreate, submitContactForm);

// Admin routes
router.get('/stats', authMiddleware(['admin']), getContactStats);
router.get('/', validatePagination, authMiddleware(['admin']), getContacts);
router.get('/:id', validateContactId, authMiddleware(['admin']), getContact);
router.put('/:id', validateContactUpdate, authMiddleware(['admin']), updateContact);
router.delete('/:id', validateContactId, authMiddleware(['admin']), deleteContact);

export default router;
