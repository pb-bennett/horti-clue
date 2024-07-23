import { Document, Types } from 'mongoose';

export interface SpeciesUrlType {
  _id: Types.ObjectId;
  url: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
  createdBy: Types.ObjectId;
}

export interface SpeciesNoteType {
  _id: Types.ObjectId;
  text: string;
  createdAt: Date;
  updatedAt: Date;
  createdBy: Types.ObjectId;
}

export interface SpeciesType extends Document {
  commonName: string;
  scientificName: string;
  description?: string;
  lightRequirements?: string;
  externalUrls?: SpeciesUrlType[]; // Array of SpeciesUrl objects (optional)
  tags?: string[];
  notes?: SpeciesNoteType[]; // Array of SpeciesNote objects (optional)
  createdAt: Date;
  updatedAt: Date;
  createdBy: Types.ObjectId;
}
