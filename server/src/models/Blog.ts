import mongoose, { Schema, Document } from 'mongoose';

export interface IBlog extends Document {
  title: string;
  slug: string;
  summary: string;
  content: string;
  author: mongoose.Types.ObjectId;
  coverImage?: string;
  tags: string[];
  category: string;
  isPublished: boolean;
  isFeatured: boolean;
  publishedAt?: Date;
  metaTitle?: string;
  metaDescription?: string;
  createdAt: Date;
  updatedAt: Date;
}

const blogSchema = new Schema<IBlog>(
  {
    title: {
      type: String,
      required: [true, 'Blog title is required'],
      trim: true,
      minlength: [5, 'Title must be at least 5 characters'],
      maxlength: [200, 'Title cannot exceed 200 characters']
    },
    slug: {
      type: String,
      required: [true, 'Slug is required'],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^[a-z0-9-]+$/, 'Slug can only contain lowercase letters, numbers, and hyphens']
    },
    summary: {
      type: String,
      required: [true, 'Summary is required'],
      trim: true,
      minlength: [20, 'Summary must be at least 20 characters'],
      maxlength: [500, 'Summary cannot exceed 500 characters']
    },
    content: {
      type: String,
      required: [true, 'Content is required'],
      minlength: [50, 'Content must be at least 50 characters']
    },
    coverImage: { type: String, trim: true },
    tags: [{
      type: String,
      trim: true,
      lowercase: true,
      maxlength: [50, 'Tag cannot exceed 50 characters']
    }],
    category: {
      type: String,
      trim: true,
      default: 'general'
    },
    isPublished: {
      type: Boolean,
      default: false
    },
    isFeatured: {
      type: Boolean,
      default: false
    },
    publishedAt: {
      type: Date
    },
    metaTitle: {
      type: String,
      trim: true,
      maxlength: [60, 'Meta title cannot exceed 60 characters']
    },
    metaDescription: {
      type: String,
      trim: true,
      maxlength: [160, 'Meta description cannot exceed 160 characters']
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: 'Admin',
      required: true
    }
  },
  { timestamps: true }
);

// Note: slug already has unique: true, so no need for separate index
blogSchema.index({ category: 1 });
blogSchema.index({ isPublished: 1 });
blogSchema.index({ isFeatured: 1 });
blogSchema.index({ tags: 1 });
blogSchema.index({ createdAt: -1 });
blogSchema.index({
  title: "text",
  summary: "text",
  content: "text",
  tags: "text",
  metaTitle: "text",
  metaDescription: "text"
});

blogSchema.pre('save', function(next) {
  if (!this.slug && this.title) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  }
  if (this.isPublished && !this.publishedAt) {
    this.publishedAt = new Date();
  }
  next();
});

export default mongoose.model<IBlog>('Blog', blogSchema);
