import { Document, Types } from 'mongoose';

export interface PlantNoteType {
  _id: Types.ObjectId;
  text: string;
  createdAt: Date;
  updatedAt: Date;
  createdBy: Types.ObjectId;
}

export interface PlantMeasurementType {
  _id: Types.ObjectId;
  height?: number;
  width?: number;
  measuredAt: Date;
  measuredBy: Types.ObjectId;
}

export interface PlantType extends Document {
  species: Types.ObjectId;
  notes?: PlantNoteType[];
  location?: {
    type: 'Point';
    coordinates: [number, number]; // [longitude, latitude]
  };
  measurements?: PlantMeasurementType[];
  garden: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}
