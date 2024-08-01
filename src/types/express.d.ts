// src/types/express.d.ts
import * as express from 'express';
declare global {
  namespace Express {
    interface Request {
      user?: {
        email: string;
        firstName: string;
        lastName: string;
        userId: string;
        userGardensIds: string[];
        adminGardensIds: string[];
      };
    }
  }
}
