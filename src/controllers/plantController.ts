import { Request, Response } from "express";

const getPlants = async (req: Request, res: Response) => {
  res.status(200).json({ message: "getPlants!", user: req.user });
};
const getPlantById = async (req: Request, res: Response) => {
  const { id } = req.params;
  res.status(200).json({ getPlantById: id });
};

const createPlant = async (req: Request, res: Response) => {
  const { name } = req.body;
  res.status(200).json({ createPlant: name });
};

const updatePlant = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name } = req.body;
  res.status(200).json({ updatePlant: id, name });
};

const deletePlant = async (req: Request, res: Response) => {
  const { id } = req.params;
  res.status(200).json({ deletePlant: id });
};

export { getPlants, getPlantById, createPlant, updatePlant, deletePlant };
