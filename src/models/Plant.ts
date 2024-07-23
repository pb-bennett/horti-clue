import { Schema, model, Document, Types } from 'mongoose';
import { PlantType, PlantNoteType, PlantMeasurementType } from '../types/Plant';

// PlantNote interface and schema

const plantNoteSchema = new Schema<PlantNoteType>(
  {
    _id: {
      type: Schema.Types.ObjectId,
      required: true,
      default: () => new Types.ObjectId(),
    },
    text: { type: String, required: true },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  },
  { timestamps: true }
);

// PlantMeasurement interface and schema

const plantMeasurementSchema = new Schema<PlantMeasurementType>({
  _id: {
    type: Schema.Types.ObjectId,
    required: true,
    default: () => new Types.ObjectId(),
  },
  height: { type: Number },
  width: { type: Number },
  measuredAt: { type: Date, default: Date.now, required: true },
  measuredBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
});

// Plant interface and schema

const plantSchema = new Schema<PlantType>(
  {
    species: { type: Schema.Types.ObjectId, ref: 'Species', required: true },
    notes: { type: [plantNoteSchema], default: [] },
    location: {
      type: { type: String, enum: ['Point'], default: 'Point' },
      coordinates: { type: [Number], required: true },
    },
    measurements: { type: [plantMeasurementSchema], default: [] },
    garden: { type: Schema.Types.ObjectId, ref: 'Garden', required: true },
  },
  { timestamps: true }
);

// Creating Plant model
export default model<PlantType>('Plant', plantSchema);
