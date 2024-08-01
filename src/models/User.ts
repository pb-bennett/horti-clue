// models/User.ts

import { model, Schema } from 'mongoose';

import { UserType } from '../types/User';

const userSchema = new Schema<UserType>(
  {
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    siteAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default model<UserType>('User', userSchema);
