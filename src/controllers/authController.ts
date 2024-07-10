import { Request, Response, NextFunction } from "express";
import * as argon2 from "argon2";
import jwt from "jsonwebtoken";

import User from "../models/User";
import { throwError } from "../utils/errorHandler";

interface UserRegisterBody {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface UserLoginBody {
  email: string;
  password: string;
}

const register = async (
  req: Request<{}, {}, UserRegisterBody>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password, confirmPassword, firstName, lastName } = req.body;
    const existingUser = await User.findOne({ email: email });
    if (existingUser) throwError("User already exists", 409);
    if (password !== confirmPassword) throwError("Passwords do not match", 400);
    const hashedPassword = await argon2.hash(password);
    const user = await User.create({
      email,
      password: hashedPassword,
      firstName,
      lastName,
    });
    res.status(200).json({ register: user });
  } catch (error) {
    next(error);
  }
};

const login = async (
  req: Request<{}, {}, UserLoginBody>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) {
      return throwError("User does not exist", 404);
    }
    const isMatch = await argon2.verify(user.password, password);
    if (!isMatch) throwError("Incorrect email or password", 400);
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET!, {
      expiresIn: "2h",
    });
    res.status(200).json({ status: "success", data: { token } });
  } catch (error) {
    next(error);
  }
};

export { register, login };
