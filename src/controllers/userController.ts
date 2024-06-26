import { Request, Response } from 'express';

interface UserPostBody {
  name: string;
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

const getUsers = async (req: Request, res: Response) => {
  res.status(200).send('getUsers!');
};
const getUserById = async (req: Request<UserParams>, res: Response) => {
  const { id } = req.params;
  res.status(200).json({ getUserById: id });
};

const createUser = async (req: Request<{}, {}, UserPostBody>, res: Response) => {
  console.log(req.body);
  const { name: string } = req.body;
  const { name } = req.body;
  res.status(200).json({ createUser: name });
};

const updateUser = async (req: Request<UserParams, {}, UserPatchBody>, res: Response) => {
  const { id } = req.params;
  res.status(200).json({ updateUser: id });
};

const deleteUser = async (req: Request<UserParams>, res: Response) => {
  const { id } = req.params;
  res.status(200).json({ deleteUser: id });
};

export { getUsers, getUserById, createUser, updateUser, deleteUser };
