import mongoose, { Schema, Document } from 'mongoose';

export interface IService extends Document {
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  category: string;
  tags: string[];
  isActive: boolean;
  isFeatured: boolean;
  displayOrder: number;
  relatedServices: mongoose.Types.ObjectId[];
  metaTitle?: string;
  metaDescription?: string;
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
      maxlength: [100, 'Title cannot exceed 100 characters']
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
      minlength: [20, 'Description must be at least 20 characters']
    },
    image: { type: String, trim: true },
    author: {
      type: Schema.Types.ObjectId,
      ref: 'Admin',
      required: true
    }
  },
  { timestamps: true }
);

serviceSchema.index({ title: 1 });
serviceSchema.index({ createdAt: -1 });

export default mongoose.model<IService>('Service', serviceSchema);
