import { Document, Types } from "mongoose";

export interface SpeciesUrl {
  _id: Types.ObjectId;
  url: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
  createdBy: Types.ObjectId;
}

export interface SpeciesNote {
  _id: Types.ObjectId;
  text: string;
  createdAt: Date;
  updatedAt: Date;
  createdBy: Types.ObjectId;
}

export interface SpeciesDocument extends Document {
  commonName: string;
  scientificName: string;
  description?: string;
  lightRequirements?: string;
  externalUrls?: SpeciesUrl[]; // Array of SpeciesUrl objects (optional)
  tags?: string[];
  notes?: SpeciesNote[]; // Array of SpeciesNote objects (optional)
  createdAt: Date;
  updatedAt: Date;
  createdBy: Types.ObjectId;
}
