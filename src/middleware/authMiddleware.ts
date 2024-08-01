// src/middleware/authHandler.ts

import jwt, { JwtPayload } from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import User from '../models/User';
import Garden from '../models/Garden';
import { throwError } from '../utils/errorHandler';
import logger from '../utils/logger';
import { UserType } from '../types/User';
import { GardenType } from '../types/Garden';

interface TokenPayload extends JwtPayload {
  userId: string;
}

export const authHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization;

    if (typeof authHeader !== 'string') {
      return res.status(400).json({ message: 'Token error' });
    }

    const token: string = authHeader.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET!) as TokenPayload;

    const user: UserType | null = await User.findById(decodedToken.userId);

    if (!user) {
      return res.status(404).json({ message: 'Token error - User does not exist' });
    }

    const { email, firstName, lastName, _id: userId } = user;
    const userGardens: GardenType[] = await Garden.find({ users: userId });
    const adminGardens: GardenType[] = await Garden.find({ admins: userId });
    const userGardensIds = userGardens.map((garden) => garden._id.toString());
    const adminGardensIds = adminGardens.map((garden) => garden._id.toString());

    // req.user = { email, firstName, lastName, userId: userId.toString(), userGardensIds, adminGardensIds };

    next();
  } catch (error) {
    next(error);
  }
};
