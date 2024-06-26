import { Request, Response } from 'express';

const getSpecies = async (req: Request, res: Response) => {
  res.status(200).send('getSpeciess!');
};
const getSpeciesById = async (req: Request, res: Response) => {
  const { id } = req.params;
  res.status(200).json({ getSpeciesById: id });
};

const createSpecies = async (req: Request, res: Response) => {
  const { name } = req.body;
  res.status(200).json({ createSpecies: name });
};

const updateSpecies = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name } = req.body;
  res.status(200).json({ updateSpecies: id, name });
};

const deleteSpecies = async (req: Request, res: Response) => {
  const { id } = req.params;
  res.status(200).json({ deleteSpecies: id });
};

export { getSpecies, getSpeciesById, createSpecies, updateSpecies, deleteSpecies };
