import { Document, Types } from "mongoose";

export interface PlantNote {
  _id: Types.ObjectId;
  text: string;
  createdAt: Date;
  updatedAt: Date;
  createdBy: Types.ObjectId;
}

export interface PlantMeasurement {
  _id: Types.ObjectId;
  height: number;
  width: number;
  measuredAt: Date;
  measuredBy: Types.ObjectId;
}

export interface Plant extends Document {
  species: Types.ObjectId;
  notes: PlantNote[];
  location: {
    type: "Point";
    coordinates: [number, number]; // [longitude, latitude]
  };
  measurements: PlantMeasurement[];
  createdAt: Date;
  updatedAt: Date;
}
