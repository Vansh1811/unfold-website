import mongoose, { Schema, Document } from 'mongoose';

export interface ITeam extends Document {
  name: string;
  role: string;
  bio: string;
  photoUrl?: string;
  contactEmail?: string;
  linkedinUrl?: string;
  twitterUrl?: string;
  order: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const teamSchema = new Schema<ITeam>(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      minlength: [2, 'Name must be at least 2 characters'],
      maxlength: [100, 'Name cannot exceed 100 characters']
    },
    role: {
      type: String,
      required: [true, 'Role is required'],
      trim: true,
      maxlength: [100, 'Role cannot exceed 100 characters']
    },
    bio: {
      type: String,
      required: [true, 'Bio is required'],
      trim: true,
      minlength: [10, 'Bio must be at least 10 characters'],
      maxlength: [1000, 'Bio cannot exceed 1000 characters']
    },
    photoUrl: {
      type: String,
      trim: true
    },
    contactEmail: {
      type: String,
      trim: true,
      lowercase: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        'Please enter a valid email'
      ]
    },
    linkedinUrl: {
      type: String,
      trim: true
    },
    twitterUrl: {
      type: String,
      trim: true
    },
    order: {
      type: Number,
      default: 0
    },
    isActive: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true
  }
);

// Index for performance
teamSchema.index({ order: 1 });
teamSchema.index({ isActive: 1 });
teamSchema.index({ name: 1 });

export default mongoose.model<ITeam>('Team', teamSchema);
