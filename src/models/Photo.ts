import { Schema, model } from "mongoose";
import { Photo } from "../types/Photo";

// Photo interface and schema
const photoSchema = new Schema<Photo>(
  {
    url: { type: String, required: true },
    description: { type: String },
    createdBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
    plantReferences: [
      { type: Schema.Types.ObjectId, ref: "Plant", required: true },
    ],
    garden: { type: Schema.Types.ObjectId, ref: "Garden", required: true },
  },
  { timestamps: true }
);

// Creating Photo model
export default model<Photo>("Photo", photoSchema);
