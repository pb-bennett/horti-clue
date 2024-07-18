import { Request, Response } from "express";

const getPhotos = async (req: Request, res: Response) => {
  res.status(200).json({ message: "getPhotos!", user: req.user });
};
const getPhotoById = async (req: Request, res: Response) => {
  const { id } = req.params;
  res.status(200).json({ getPhotoById: id });
};

const createPhoto = async (req: Request, res: Response) => {
  const { name } = req.body;
  res.status(200).json({ createPhoto: name });
};

const updatePhoto = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name } = req.body;
  res.status(200).json({ updatePhoto: id, name });
};

const deletePhoto = async (req: Request, res: Response) => {
  const { id } = req.params;
  res.status(200).json({ deletePhoto: id });
};

export { getPhotos, getPhotoById, createPhoto, updatePhoto, deletePhoto };
