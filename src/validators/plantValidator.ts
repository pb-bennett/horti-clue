import Joi from "joi";
import { Plant, PlantNote, PlantMeasurement } from "../types/Plant";

const plantNoteSchema = Joi.object({
  text: Joi.string().required(),
  createdBy: Joi.string().hex().length(24).required(),
});

const plantMeasurementSchema = Joi.object({
  height: Joi.number().optional(),
  width: Joi.number().optional(),
  measuredAt: Joi.date().required(),
  measuredBy: Joi.string().hex().length(24).required(),
});

const basePlantSchema = Joi.object({
  species: Joi.string().hex().length(24).required(),
  notes: Joi.array().items(plantNoteSchema).optional(),
  location: Joi.object({
    type: Joi.string().valid("Point").required(),
    coordinates: Joi.array().items(Joi.number()).length(2).required(),
  }).required(),
  measurements: Joi.array().items(plantMeasurementSchema).optional(),
  garden: Joi.string().hex().length(24).required(),
});

const patchPlantSchema = basePlantSchema.fork(
  Object.keys(basePlantSchema.describe().keys),
  (field) => field.optional()
);

export const validatePlantPost = (plant: Partial<Plant>) => {
  return basePlantSchema.validate(plant, { abortEarly: false });
};

export const validatePlantPatch = (plant: Partial<Plant>) => {
  return patchPlantSchema.validate(plant, { abortEarly: false });
};
