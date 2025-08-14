import express from 'express';
import { authMiddleware } from '../middleware/authMiddleware';
import {
  getAllTeamMembers,
  getTeamMember,
  createTeamMember,
  updateTeamMember,
  deleteTeamMember
} from '../controllers/teamController';
import {
  validateTeamCreate,
  validateTeamUpdate,
  validateTeamId,
  validatePagination
} from '../middleware/validation';

const router = express.Router();

// Public routes
router.get('/', validatePagination, getAllTeamMembers);
router.get('/:id', validateTeamId, getTeamMember);

// Protected routes
router.post('/', validateTeamCreate, authMiddleware(['admin', 'editor']), createTeamMember);
router.put('/:id', validateTeamUpdate, authMiddleware(['admin', 'editor']), updateTeamMember);
router.delete('/:id', validateTeamId, authMiddleware(['admin']), deleteTeamMember);

export default router;
