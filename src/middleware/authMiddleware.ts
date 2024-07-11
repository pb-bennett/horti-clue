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

declare module "express-serve-static-core" {
  interface Request {
    user?: {
      email: string;
      firstName: string;
      lastName: string;
      userId: string;
    };
  }
}

export const authHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("Auth TEST!!!!!!!!");
  try {
    const authHeader = req.headers.authorization;
    // if (!authHeader) next();

    if (typeof authHeader !== "string") {
      return res.status(400).json({ message: "Token error" });
    }

    const token: string = authHeader.split(" ")[1];
    const decodedToken = jwt.verify(
      token,
      process.env.JWT_SECRET!
    ) as TokenPayload;

    const user: UserDocument | null = await User.findById(decodedToken.userId);

    if (!user) {
      return res
        .status(404)
        .json({ message: "Token error - User does not exist" });
    }

    const { email, firstName, lastName, _id: userId } = user;

    req.user = { email, firstName, lastName, userId: userId.toString() };

    next();
  } catch (error) {
    next(error);
  }
};
