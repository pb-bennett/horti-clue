import { Request, Response, NextFunction } from "express";
import User from "../models/User";
import { errorHandler } from "../utils/errorHandler";

interface UserPostBody {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface UserPatchBody {
  name?: string;
  email?: string;
  password?: string;
}

interface UserParams {
  id: string;
}

const getUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await User.find();
    errorHandler("No users found", 404);
    console.log(users);

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
  req: Request<{}, {}, UserPostBody>,
  res: Response
) => {
  console.log(req.body);
  const { email, password, firstName, lastName } = req.body;
  const newUser = await User.create({ email, password, firstName, lastName });
  res.status(200).json({ createUser: newUser });
};

const updateUser = async (
  req: Request<UserParams, {}, UserPatchBody>,
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
