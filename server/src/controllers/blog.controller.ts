import { Request, Response } from "express";
import Blog from "../models/Blog";
import logger from "../utils/logger";
import { AuthRequest } from "../middleware/authMiddleware";

// @desc    Get all published blogs (public)
// @route   GET /api/blog
export const getAllBlogs = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const category = req.query.category as string;
    const tag = req.query.tag as string;
    const search = req.query.search as string;
    const sortBy = req.query.sortBy as string || 'publishedAt';
    const sortOrder = req.query.sortOrder as string || 'desc';

    let query: any = { isPublished: true };

    if (category) query.category = category;
    if (tag) query.tags = tag;
    if (search) query.$text = { $search: search };

    const sortObj: any = {};
    if (search) {
      sortObj.score = { $meta: "textScore" };
    } else {
      sortObj[sortBy] = sortOrder === "desc" ? -1 : 1;
    }

    const blogs = await Blog.find(query)
      .populate("author", "name email")
      .sort(sortObj)
      .limit(limit)
      .skip((page - 1) * limit)
      .select("-content");

    const total = await Blog.countDocuments(query);

    res.json({
      success: true,
      data: {
        blogs,
        pagination: {
          page,
          limit,
          total,
          pages: Math.ceil(total / limit)
        }
      }
    });
  } catch (err) {
    logger.error("Get blogs error:", err);
    res.status(500).json({ success: false, message: "Failed to fetch blogs" });
  }
}

// @desc    Get single blog by slug (public)
// @route   GET /api/blog/:slug
export const getBlogBySlug = async (req: Request, res: Response) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug, isPublished: true })
      .populate("author", "name email");
    if (!blog) {
      return res.status(404).json({ success: false, message: "Blog not found" });
    }
    res.json({ success: true, data: { blog } });
  } catch (err) {
    logger.error("Get blog by slug error:", err);
    res.status(500).json({ success: false, message: "Failed to fetch blog" });
  }
}

// @desc    Admin: get all blogs (any status)
// @route   GET /api/blog/admin
export const getAllBlogsAdmin = async (req: AuthRequest, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const status = req.query.status as string;  // "published" | "draft" | "all"
    const search = req.query.search as string;
    let query: any = {};
    if (status === "published") query.isPublished = true;
    else if (status === "draft") query.isPublished = false;
    if (search) query.$text = { $search: search };

    const blogs = await Blog.find(query)
      .populate("author", "name email")
      .sort({ createdAt: -1 })
      .limit(limit)
      .skip((page - 1) * limit);

    const total = await Blog.countDocuments(query);

    res.json({
      success: true,
      data: { blogs, pagination: { page, limit, total, pages: Math.ceil(total / limit) } }
    });
  } catch (err) {
    logger.error("Admin get blogs error:", err);
    res.status(500).json({ success: false, message: "Failed to fetch blogs" });
  }
}

// @desc    Create blog
// @route   POST /api/blog/admin
export const createBlog = async (req: AuthRequest, res: Response) => {
  try {
    const blogData = {
      ...req.body,
      author: req.user!._id
    };

    const requiredFields = ["title", "summary", "content"];
    const missingFields = requiredFields.filter(f => !blogData[f]);
    if (missingFields.length) {
      return res.status(400).json({ success: false, message: `Missing: ${missingFields.join(", ")}` });
    }

    const existing = await Blog.findOne({ slug: blogData.slug });
    if (existing) {
      return res.status(400).json({ success: false, message: "Slug already exists" });
    }

    // Set publishedAt date if published
    if (blogData.isPublished) blogData.publishedAt = new Date();

    const blog = await Blog.create(blogData);
    res.status(201).json({ success: true, data: { blog } });
  } catch (err: any) {
    logger.error("Create blog error:", err);
    if (err.name === "ValidationError") {
      const errors = Object.values(err.errors).map((v: any) => v.message);
      return res.status(400).json({ success: false, message: "Validation Error", errors });
    }
    if (err.code === 11000) {
      return res.status(400).json({ success: false, message: "Slug already exists" });
    }
    res.status(500).json({ success: false, message: "Failed to create blog" });
  }
}

// @desc    Update blog
// @route   PUT /api/blog/admin/:id
export const updateBlog = async (req: AuthRequest, res: Response) => {
  try {
    const blogUpdate = {
      ...req.body,
      updatedAt: new Date()
    };

    // Check slug uniqueness
    if (blogUpdate.slug) {
      const existing = await Blog.findOne({ slug: blogUpdate.slug, _id: { $ne: req.params.id } });
      if (existing) return res.status(400).json({ success: false, message: "Slug already exists" });
    }

    // Set publishedAt if published now
    if (blogUpdate.isPublished && !blogUpdate.publishedAt) blogUpdate.publishedAt = new Date();

    const blog = await Blog.findByIdAndUpdate(req.params.id, blogUpdate, { new: true, runValidators: true });
    if (!blog) return res.status(404).json({ success: false, message: "Blog not found" });

    res.json({ success: true, data: { blog } });
  } catch (err: any) {
    logger.error("Update blog error:", err);
    if (err.name === "ValidationError") {
      const errors = Object.values(err.errors).map((v: any) => v.message);
      return res.status(400).json({ success: false, message: "Validation Error", errors });
    }
    res.status(500).json({ success: false, message: "Failed to update blog" });
  }
}

// @desc    Delete blog
// @route   DELETE /api/blog/admin/:id
export const deleteBlog = async (req: AuthRequest, res: Response) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) return res.status(404).json({ success: false, message: "Blog not found" });
    res.json({ success: true, message: "Blog deleted" });
  } catch (err) {
    logger.error("Delete blog error:", err);
    res.status(500).json({ success: false, message: "Failed to delete blog" });
  }
}
