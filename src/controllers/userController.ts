import { Request, Response, NextFunction } from "express";
import User from "../models/User";
import { throwError } from "../utils/errorHandler";
import {
  UserParams,
  RegisterUserRequest,
  UpdateUserRequest,
} from "../types/User";

// interface UserPostBody {
//   firstName: string;
//   lastName: string;
//   email: string;
//   password: string;
//   confirmPassword: string;
// }

// interface UserPatchBody {
//   firstName?: string;
//   lastName?: string;
//   email?: string;
//   password?: string;
// }

// interface UserParams {
//   id: string;
// }

const getUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await User.find();
    if (!users || users.length === 0) throwError("No users found", 404);

    res.status(200).json({ getUsers: users });
  } catch (error) {
    next(error);
  }
};
const getUserById = async (req: Request<UserParams>, res: Response) => {
  const { id } = req.params;
  res.status(200).json({ getUserById: id });
};

const createUser = async (
  req: Request<{}, {}, RegisterUserRequest>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password, confirmPassword, firstName, lastName } = req.body;
    const existingUser = await User.findOne({ email: email });
    if (existingUser) throwError("User already exists", 409);
    if (password !== confirmPassword) throwError("Passwords do not match", 400);
    const newUser = await User.create({ email, password, firstName, lastName });
    res.status(200).json({ createUser: newUser });
  } catch (error) {
    next(error);
  }
};

const updateUser = async (
  req: Request<UserParams, {}, UpdateUserRequest>,
  res: Response
) => {
  const { id } = req.params;
  res.status(200).json({ updateUser: id });
};

const deleteUser = async (req: Request<UserParams>, res: Response) => {
  const { id } = req.params;
  res.status(200).json({ deleteUser: id });
};

export { getUsers, getUserById, createUser, updateUser, deleteUser };
