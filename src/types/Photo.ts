import { Document, Types } from 'mongoose';

export interface PhotoType extends Document {
  url: string;
  description?: string;
  createdBy: Types.ObjectId;
  plantReferences: Types.ObjectId[];
  garden: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}
