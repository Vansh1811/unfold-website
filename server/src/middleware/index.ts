// Authentication middleware
export { authMiddleware, generateToken, verifyToken } from './authMiddleware';
export type { AuthRequest } from './authMiddleware';

// Error handling middleware
export { globalErrorHandler, catchAsync, AppError } from './errorMiddleware';

// Validation middleware - from validation.ts (more comprehensive)
export {
  handleValidationErrors,
  validateAdminRegistration,
  validateAdminLogin,
  validateAdminUpdate,
  validateBlogCreate,
  validateBlogUpdate,
  validateBlogId,
  validateBlogQuery,
  validateTeamCreate,
  validateTeamUpdate,
  validateTeamId,
  validateServiceCreate,
  validateServiceUpdate,
  validateServiceId,
  validateContactCreate,
  validateContactUpdate,
  validateContactId,
  validatePagination
} from './validation';

// Legacy validation middleware - from validateMiddleware.ts
export {
  validateAdminRegistration as validateAdminRegistrationLegacy,
  validateAdminLogin as validateAdminLoginLegacy,
  validateContactForm,
  validateBlogCreation,
  validateServiceCreation,
  validateTeamMember
} from './validateMiddleware';

// Async wrapper utility
export { asyncWrapper, catchAsync as asyncCatch } from '../utils/asyncWrapper';
