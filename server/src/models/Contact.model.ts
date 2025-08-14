import mongoose, { Schema, Document } from 'mongoose';

export interface IContact extends Document {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject: string;
  message: string;
  serviceType?: 'compliance' | 'risk-management' | 'governance' | 'other';
  status: 'new' | 'in-progress' | 'resolved' | 'closed';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  submittedAt: Date;
  respondedAt?: Date;
  ipAddress?: string;
  userAgent?: string;
  adminNotes?: string;
  isRead: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const contactSchema = new Schema<IContact>(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      minlength: [2, 'Name must be at least 2 characters'],
      maxlength: [100, 'Name cannot exceed 100 characters']
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      lowercase: true,
      trim: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        'Please enter a valid email'
      ]
    },
    phone: {
      type: String,
      trim: true,
      match: [
        /^[\+]?[1-9][\d]{0,15}$/,
        'Please enter a valid phone number'
      ]
    },
    company: {
      type: String,
      trim: true,
      maxlength: [200, 'Company name cannot exceed 200 characters']
    },
    subject: {
      type: String,
      required: [true, 'Subject is required'],
      trim: true,
      minlength: [5, 'Subject must be at least 5 characters'],
      maxlength: [200, 'Subject cannot exceed 200 characters']
    },
    message: {
      type: String,
      required: [true, 'Message is required'],
      trim: true,
      minlength: [10, 'Message must be at least 10 characters'],
      maxlength: [2000, 'Message cannot exceed 2000 characters']
    },
    serviceType: {
      type: String,
      enum: ['compliance', 'risk-management', 'governance', 'other'],
      default: 'other'
    },
    status: {
      type: String,
      enum: ['new', 'in-progress', 'resolved', 'closed'],
      default: 'new'
    },
    priority: {
      type: String,
      enum: ['low', 'medium', 'high', 'urgent'],
      default: 'medium'
    },
    submittedAt: {
      type: Date,
      default: Date.now
    },
    respondedAt: {
      type: Date,
      default: null
    },
    ipAddress: {
      type: String,
      select: false // Don't include in regular queries for privacy
    },
    userAgent: {
      type: String,
      select: false // Don't include in regular queries for privacy
    },
    adminNotes: {
      type: String,
      maxlength: [1000, 'Admin notes cannot exceed 1000 characters']
    },
    isRead: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

// Indexes for better query performance
contactSchema.index({ email: 1 });
contactSchema.index({ status: 1 });
contactSchema.index({ priority: 1 });
contactSchema.index({ submittedAt: -1 });
contactSchema.index({ isRead: 1 });

export default mongoose.model<IContact>('Contact', contactSchema);
