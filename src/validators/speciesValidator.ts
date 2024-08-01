import Joi from 'joi';
import { SpeciesUrlType, SpeciesNoteType, SpeciesType } from '../types/Species';

const speciesUrlSchema = Joi.object({
  url: Joi.string().uri().required(),
  description: Joi.string().optional(),
  createdBy: Joi.string().hex().length(24).required(),
});

const speciesNoteSchema = Joi.object({
  text: Joi.string().required(),
  createdAt: Joi.date().required(),
  updatedAt: Joi.date().required(),
  createdBy: Joi.string().hex().length(24).required(),
});

const baseSpeciesSchema = Joi.object({
  commonName: Joi.string().required(),
  scientificName: Joi.string().required(),
  description: Joi.string().optional(),
  lightRequirements: Joi.string().optional(),
  externalUrls: Joi.array().items(speciesUrlSchema).optional(),
  tags: Joi.array().items(Joi.string()).optional(),
  notes: Joi.array().items(speciesNoteSchema).optional(),
  createdBy: Joi.string().hex().length(24).required(),
});

const patchSpeciesSchema = baseSpeciesSchema.fork(Object.keys(baseSpeciesSchema.describe().keys), (field) => field.optional());

export const validateSpeciesPost = (species: Partial<SpeciesType>) => {
  return baseSpeciesSchema.validate(species, { abortEarly: false });
};

export const validateSpeciesPatch = (species: Partial<SpeciesType>) => {
  return patchSpeciesSchema.validate(species, { abortEarly: false });
};
