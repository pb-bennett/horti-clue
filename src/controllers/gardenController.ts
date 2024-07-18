import { Request, Response } from "express";

const getGardens = async (req: Request, res: Response) => {
  res.status(200).json({ message: "getGardens!", user: req.user });
};
const getGardenById = async (req: Request, res: Response) => {
  const { id } = req.params;
  res.status(200).json({ getGardenById: id });
};

const createGarden = async (req: Request, res: Response) => {
  const { name } = req.body;
  res.status(200).json({ createGarden: name });
};

const updateGarden = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name } = req.body;
  res.status(200).json({ updateGarden: id, name });
};

const deleteGarden = async (req: Request, res: Response) => {
  const { id } = req.params;
  res.status(200).json({ deleteGarden: id });
};

export { getGardens, getGardenById, createGarden, updateGarden, deleteGarden };
