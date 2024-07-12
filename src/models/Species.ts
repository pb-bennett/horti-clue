import { Schema, model, Types } from "mongoose";
import { SpeciesUrl, SpeciesNote, SpeciesDocument } from "../types/Species";

const speciesUrlSchema = new Schema<SpeciesUrl>(
  {
    _id: {
      type: Schema.Types.ObjectId,
      required: true,
      default: () => new Types.ObjectId(),
    },
    url: { type: String, required: true },
    description: { type: String },
    createdBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  {
    timestamps: true,
  }
);

const speciesNoteSchema = new Schema<SpeciesNote>({
  _id: {
    type: Schema.Types.ObjectId,
    required: true,
    default: () => new Types.ObjectId(),
  },
  text: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, required: true },
  updatedAt: { type: Date, default: Date.now, required: true },
  createdBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

const speciesSchema = new Schema<SpeciesDocument>(
  {
    commonName: { type: String, required: true },
    scientificName: { type: String, required: true },
    description: { type: String },
    lightRequirements: { type: String },
    externalUrls: [speciesUrlSchema], // Array of SpeciesUrl schema objects (optional)
    tags: [{ type: String }],
    notes: [speciesNoteSchema], // Array of SpeciesNote objects (optional)
    createdBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  {
    timestamps: true, // This will add `createdAt` and `updatedAt` fields
  }
);

export default model<SpeciesDocument>("Species", speciesSchema);
