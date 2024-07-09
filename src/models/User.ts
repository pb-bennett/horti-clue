// models/User.ts

import { Document, model, Schema } from "mongoose";

export interface UserDocument extends Document {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

const userSchema = new Schema<UserDocument>({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
});

export default model<UserDocument>("User", userSchema);
