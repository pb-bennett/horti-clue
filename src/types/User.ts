import { Document, ObjectId } from 'mongoose';

// Model type definition
export interface UserType extends Document {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  _id: ObjectId;
}

// Request body interfaces
export interface RegisterUserRequestType {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
}

export interface UpdateUserRequestType {
  email?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
}

export interface LoginUserRequestType {
  email: string;
  password: string;
}

// User Params

export interface UserParamsType {
  id: string;
}
