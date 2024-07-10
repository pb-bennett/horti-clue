import { Document, ObjectId } from "mongoose";

// Model type definition
export interface UserDocument extends Document {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  _id: ObjectId;
}

// Request body interfaces
export interface RegisterUserRequest {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
}

export interface UpdateUserRequest {
  email?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
}

export interface LoginUserRequest {
  email: string;
  password: string;
}

// User Params

export interface UserParams {
  id: string;
}
