// src/types/express.d.ts

import { UserDocument } from "../models/User"; // Adjust the import path as necessary

declare global {
  namespace Express {
    interface Request {
      user?: {
        email: string;
        firstName: string;
        lastName: string;
        userId: string;
      };
    }
  }
}
