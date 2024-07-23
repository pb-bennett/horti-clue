import { Schema, model } from 'mongoose';
import { GardenType } from '../types/Garden';

// Interface for Garden

// Garden Schema
const gardenSchema = new Schema<GardenType>(
  {
    name: { type: String, required: true },
    boundary: {
      type: {
        type: String,
        enum: ['Polygon'],
        required: true,
        default: 'Polygon',
      },
      coordinates: { type: [[Number]], required: true }, // 2D array of numbers for Polygon coordinates
    },
    users: [{ type: Schema.Types.ObjectId, ref: 'User', required: true }],
    admins: [{ type: Schema.Types.ObjectId, ref: 'User', required: true }],
  },
  { timestamps: true }
);

// Creating Garden model
export default model<GardenType>('Garden', gardenSchema);
