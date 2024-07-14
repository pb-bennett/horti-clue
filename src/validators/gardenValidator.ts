import Joi from "joi";
import { Garden } from "../types/Garden";

const baseGardenSchema = Joi.object({
  name: Joi.string().required(),
  boundary: Joi.object({
    type: Joi.string().valid("Polygon").required(),
    coordinates: Joi.array()
      .items(Joi.array().items(Joi.number()).min(4))
      .required(),
  }).required(),
  users: Joi.array().items(Joi.string().hex().length(24)).required(),
  admins: Joi.array().items(Joi.string().hex().length(24)).required(),
});

const patchGardenSchema = baseGardenSchema.fork(
  Object.keys(baseGardenSchema.describe().keys),
  (field) => field.optional()
);

export const validateGardenPost = (garden: Partial<Garden>) => {
  return baseGardenSchema.validate(garden, { abortEarly: false });
};

export const validateGardenPatch = (garden: Partial<Garden>) => {
  return patchGardenSchema.validate(garden, { abortEarly: false });
};
