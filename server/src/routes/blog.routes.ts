import { Router } from "express";
import {
  getAllBlogs,
  getBlogBySlug,
  getAllBlogsAdmin,
  createBlog,
  updateBlog,
  deleteBlog,
} from "../controllers/blog.controller";
import { authMiddleware } from "../middleware/authMiddleware";
import {
  validateBlogCreate,
  validateBlogUpdate,
  validateBlogId,
  validateBlogQuery,
  validatePagination
} from "../middleware/validation";

const router = Router();

// Public
router.get("/", validateBlogQuery, validatePagination, getAllBlogs);
router.get("/:slug", getBlogBySlug);

// Admin protected
router.get("/admin", validatePagination, authMiddleware(['admin', 'editor']), getAllBlogsAdmin);
router.post("/admin", validateBlogCreate, authMiddleware(['admin', 'editor']), createBlog);
router.put("/admin/:id", validateBlogUpdate, authMiddleware(['admin', 'editor']), updateBlog);
router.delete("/admin/:id", validateBlogId, authMiddleware(['admin']), deleteBlog);

export default router;
