import { Router } from 'express';
import {
  getServices,
  getServiceBySlug,
  getServicesAdmin,
  createService,
  updateService,
  deleteService,
  toggleServiceStatus,
  updateDisplayOrder,
  getServiceStats
} from '../controllers/services.controller';
import { authMiddleware } from '../middleware/authMiddleware';
import {
  validateServiceCreate,
  validateServiceUpdate,
  validateServiceId,
  validatePagination
} from '../middleware/validation';

const router = Router();

// Public routes
router.get('/', validatePagination, getServices);

// Admin routes
router.get('/admin/all', validatePagination, authMiddleware(['admin']), getServicesAdmin);
router.get('/admin/stats', authMiddleware(['admin']), getServiceStats);
router.post('/admin/create', validateServiceCreate, authMiddleware(['admin', 'editor']), createService);
router.put('/admin/:id', validateServiceUpdate, authMiddleware(['admin', 'editor']), updateService);
router.delete('/admin/:id', validateServiceId, authMiddleware(['admin']), deleteService);
router.patch('/admin/:id/toggle-status', validateServiceId, authMiddleware(['admin']), toggleServiceStatus);
router.patch('/admin/bulk-order', authMiddleware(['admin']), updateDisplayOrder);

// Dynamic route LAST
router.get('/:slug', getServiceBySlug);

export default router;
