import { Schema, model, Document, Types } from "mongoose";
import { Plant, PlantNote, PlantMeasurement } from "../types/Plant";

// PlantNote interface and schema

const plantNoteSchema = new Schema<PlantNote>({
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

// PlantMeasurement interface and schema

const plantMeasurementSchema = new Schema<PlantMeasurement>({
  _id: {
    type: Schema.Types.ObjectId,
    required: true,
    default: () => new Types.ObjectId(),
  },
  height: { type: Number, required: true },
  width: { type: Number, required: true },
  measuredAt: { type: Date, default: Date.now, required: true },
  measuredBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

// Plant interface and schema

const plantSchema = new Schema<Plant>({
  species: { type: Schema.Types.ObjectId, ref: "Species", required: true },
  notes: { type: [plantNoteSchema], default: [] },
  location: {
    type: { type: String, enum: ["Point"], required: true, default: "Point" },
    coordinates: { type: [Number], required: true },
  },
  measurements: { type: [plantMeasurementSchema], default: [] },
  createdAt: { type: Date, default: Date.now, required: true },
  updatedAt: { type: Date, default: Date.now, required: true },
});

// Creating Plant model
const PlantModel = model<Plant>("Plant", plantSchema);

export { PlantModel, PlantNote, PlantMeasurement };
