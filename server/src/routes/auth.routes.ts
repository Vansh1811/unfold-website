import { Router } from 'express';
import {
  register,
  login,
  logout,
  getMe,
  updateDetails,
  updatePassword
} from '../controllers/auth.controller';
import { protect } from '../middleware/auth.middleware';

const router = Router();

// Public routes
router.post('/register', register);
router.post('/login', login);

// Protected routes
router.use(protect);

router.get('/me', getMe);
router.post('/logout', logout);
router.put('/updatedetails', updateDetails);
router.put('/updatepassword', updatePassword);

export default router;
 