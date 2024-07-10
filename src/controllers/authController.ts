import { Request, Response, NextFunction } from "express";
import * as argon2 from "argon2";
import jwt from "jsonwebtoken";
import User from "../models/User";
import { throwError } from "../utils/errorHandler";
import { RegisterUserRequest, LoginUserRequest } from "../types/User";

const register = async (
  req: Request<{}, {}, RegisterUserRequest>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password, confirmPassword, firstName, lastName } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) return throwError("User already exists", 409);

    if (password !== confirmPassword)
      return throwError("Passwords do not match", 400);

    const hashedPassword = await argon2.hash(password);
    const user = await User.create({
      email,
      password: hashedPassword,
      firstName,
      lastName,
    });

    res.status(201).json({ user });
  } catch (error) {
    next(error);
  }
};

const login = async (
  req: Request<{}, {}, LoginUserRequest>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return throwError("Email and password are required", 400);
    }

    const user = await User.findOne({ email });
    if (!user) return throwError("User does not exist", 404);

    const userPassword = user.password as string;
    if (!userPassword) return throwError("Password not set for user", 500);

    const isMatch = await argon2.verify(userPassword, password);
    if (!isMatch) return throwError("Incorrect email or password", 400);

    const jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret)
      throw new Error(
        "JWT_SECRET is not defined in the environment variables."
      );

    const token = jwt.sign({ userId: user._id }, jwtSecret, {
      expiresIn: "2h",
    });

    res.status(200).json({ status: "success", data: { token } });
  } catch (error) {
    next(error);
  }
};

export { register, login };
