// src/middleware/authHandler.ts

import jwt, { JwtPayload } from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import User from "../models/User";
import { throwError } from "../utils/errorHandler";
import logger from "../utils/logger";
import { UserDocument } from "../types/User";

interface TokenPayload extends JwtPayload {
  userId: string;
}

const authHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (typeof req.headers.authorization !== "string") {
      return throwError("Token error", 400);
    }

    const token: string = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(
      token,
      process.env.JWT_SECRET!
    ) as TokenPayload;

    const user: UserDocument | null = await User.findById(decodedToken.userId);

    if (!user) {
      return throwError("Token error - User does not exist", 404);
    }

    const { email, firstName, lastName, _id: userId } = user;

    req.user = { email, firstName, lastName, userId: userId.toString() }; // Ensure userId is a string

    next();
  } catch (error) {
    logger.error(error);
    next(error);
  }
};

export default authHandler;
