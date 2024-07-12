import { Schema, model } from "mongoose";
import { Photo } from "../types/Photo";

// Photo interface and schema

const photoSchema = new Schema<Photo>({
  url: { type: String, required: true },
  description: { type: String },
  createdAt: { type: Date, default: Date.now, required: true },
  createdBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
  plantReferences: [
    { type: Schema.Types.ObjectId, ref: "Plant", required: true },
  ],
});

// Creating Photo model
const PhotoModel = model<Photo>("Photo", photoSchema);

export { PhotoModel };
