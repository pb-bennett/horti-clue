import Joi from 'joi';
import { PhotoType } from '../types/Photo';

const basePhotoSchema = Joi.object({
  url: Joi.string().uri().required(),
  description: Joi.string().optional(),
  createdBy: Joi.string().hex().length(24).required(),
  plantReferences: Joi.array().items(Joi.string().hex().length(24)).required(),
  garden: Joi.string().hex().length(24).required(),
});

const patchPhotoSchema = basePhotoSchema.fork(Object.keys(basePhotoSchema.describe().keys), (field) => field.optional());

export const validatePhotoPost = (photo: Partial<PhotoType>) => {
  return basePhotoSchema.validate(photo, { abortEarly: false });
};

export const validatePhotoPatch = (photo: Partial<PhotoType>) => {
  return patchPhotoSchema.validate(photo, { abortEarly: false });
};
