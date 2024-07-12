import { Document, Types } from "mongoose";

export interface Photo extends Document {
  url: string;
  description?: string;
  createdAt: Date;
  createdBy: Types.ObjectId;
  plantReferences: Types.ObjectId[];
}
