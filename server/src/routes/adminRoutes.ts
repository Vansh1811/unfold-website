import express from 'express';
import Admin from '../models/Admin';
import { authMiddleware, AuthRequest } from '../middleware/authMiddleware';
import { register, login, getProfile, updateProfile, listAdmins } from '../controllers/adminController';
import {
  validateAdminRegistration,
  validateAdminLogin,
  validateAdminUpdate
} from '../middleware/validation';

const router = express.Router();

// ✅ Register - First admin can register without token
router.post('/register', validateAdminRegistration, async (req: AuthRequest, res: express.Response<any, Record<string, any>>, next: (arg0: unknown) => void) => {
  try {
    const adminExists = await Admin.findOne();
    if (adminExists) {
      // Require auth if at least one admin already exists
      return authMiddleware(['admin'])(req, res, () => register(req, res, next));
    }
    // No admin yet → Create first admin without token
    return register(req, res, next);
  } catch (error) {
    next(error);
  }
});

// ✅ Login
router.post('/login', validateAdminLogin, login);

// ✅ Profile
router.get('/profile', authMiddleware(['admin', 'editor']), getProfile);
router.put('/profile', validateAdminUpdate, authMiddleware(['admin', 'editor']), updateProfile);

// ✅ Admin Management
router.get('/list', authMiddleware(['admin']), listAdmins);

export default router;
