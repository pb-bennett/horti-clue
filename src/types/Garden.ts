import { Document, Types } from "mongoose";

export interface Garden extends Document {
  name: string;
  boundary: {
    type: "Polygon";
    coordinates: [number, number][]; // Array of [longitude, latitude] pairs
  };
  users: Types.ObjectId[];
  admins: Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}
