import mongoose, { Schema, Document } from 'mongoose';

export interface IService extends Document {
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  category: 'compliance' | 'risk-management' | 'governance' | 'consulting' | 'other';
  features: string[];
  benefits: string[];
  processSteps: {
    step: number;
    title: string;
    description: string;
  }[];
  pricing: {
    type: 'fixed' | 'hourly' | 'project-based' | 'consultation';
    startingPrice?: number;
    currency: string;
    description: string;
  };
  tags: string[];
  isActive: boolean;
  isFeatured: boolean;
  displayOrder: number;
  metaTitle?: string;
  metaDescription?: string;
  estimatedDuration?: string;
  targetAudience: string[];
  deliverables: string[];
  prerequisites?: string[];
  relatedServices: mongoose.Types.ObjectId[];
  createdBy: mongoose.Types.ObjectId;
  updatedBy: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const serviceSchema = new Schema<IService>(
  {
    title: {
      type: String,
      required: [true, 'Service title is required'],
      trim: true,
      minlength: [5, 'Title must be at least 5 characters'],
      maxlength: [200, 'Title cannot exceed 200 characters']
    },
    slug: {
      type: String,
      required: [true, 'Service slug is required'],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^[a-z0-9-]+$/, 'Slug can only contain lowercase letters, numbers, and hyphens']
    },
    shortDescription: {
      type: String,
      required: [true, 'Short description is required'],
      trim: true,
      minlength: [10, 'Short description must be at least 10 characters'],
      maxlength: [300, 'Short description cannot exceed 300 characters']
    },
    fullDescription: {
      type: String,
      required: [true, 'Full description is required'],
      trim: true,
      minlength: [50, 'Full description must be at least 50 characters'],
      maxlength: [5000, 'Full description cannot exceed 5000 characters']
    },
    icon: {
      type: String,
      required: [true, 'Service icon is required'],
      trim: true
    },
    category: {
      type: String,
      required: [true, 'Service category is required'],
      enum: ['compliance', 'risk-management', 'governance', 'consulting', 'other'],
      default: 'consulting'
    },
    features: [{
      type: String,
      trim: true,
      maxlength: [200, 'Feature description cannot exceed 200 characters']
    }],
    benefits: [{
      type: String,
      trim: true,
      maxlength: [200, 'Benefit description cannot exceed 200 characters']
    }],
    processSteps: [{
      step: {
        type: Number,
        required: true,
        min: 1
      },
      title: {
        type: String,
        required: true,
        trim: true,
        maxlength: [100, 'Step title cannot exceed 100 characters']
      },
      description: {
        type: String,
        required: true,
        trim: true,
        maxlength: [500, 'Step description cannot exceed 500 characters']
      }
    }],
    pricing: {
      type: {
        type: String,
        enum: ['fixed', 'hourly', 'project-based', 'consultation'],
        required: true,
        default: 'consultation'
      },
      startingPrice: {
        type: Number,
        min: 0
      },
      currency: {
        type: String,
        default: 'INR',
        enum: ['INR', 'USD', 'EUR']
      },
      description: {
        type: String,
        required: true,
        trim: true,
        maxlength: [300, 'Pricing description cannot exceed 300 characters']
      }
    },
    tags: [{
      type: String,
      trim: true,
      lowercase: true,
      maxlength: [50, 'Tag cannot exceed 50 characters']
    }],
    isActive: {
      type: Boolean,
      default: true
    },
    isFeatured: {
      type: Boolean,
      default: false
    },
    displayOrder: {
      type: Number,
      default: 0,
      min: 0
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
    estimatedDuration: {
      type: String,
      trim: true,
      maxlength: [100, 'Estimated duration cannot exceed 100 characters']
    },
    targetAudience: [{
      type: String,
      trim: true,
      maxlength: [100, 'Target audience item cannot exceed 100 characters']
    }],
    deliverables: [{
      type: String,
      trim: true,
      maxlength: [200, 'Deliverable description cannot exceed 200 characters']
    }],
    prerequisites: [{
      type: String,
      trim: true,
      maxlength: [200, 'Prerequisite description cannot exceed 200 characters']
    }],
    relatedServices: [{
      type: Schema.Types.ObjectId,
      ref: 'Service'
    }],
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'Admin',
      required: true
    },
    updatedBy: {
      type: Schema.Types.ObjectId,
      ref: 'Admin',
      required: true
    }
  },
  {
    timestamps: true
  }
);

// Indexes for better query performance
serviceSchema.index({ category: 1 });
serviceSchema.index({ isActive: 1 });
serviceSchema.index({ isFeatured: 1 });
serviceSchema.index({ displayOrder: 1 });
serviceSchema.index({ tags: 1 });
serviceSchema.index({ createdAt: -1 });

// Text index for search functionality
serviceSchema.index({
  title: 'text',
  shortDescription: 'text',
  fullDescription: 'text',
  tags: 'text'
});

// Pre-save middleware to generate slug from title if not provided
serviceSchema.pre('save', function(next) {
  if (!this.slug && this.title) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  }
  next();
});

export default mongoose.model<IService>('Service', serviceSchema);
