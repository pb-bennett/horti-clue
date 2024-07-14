import Joi from "joi";
import { UserDocument } from "../types/User";

const baseUserSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
});
const patchUserSchema = baseUserSchema.fork(
  Object.keys(baseUserSchema.describe().keys),
  (field) => field.optional()
);
export const validateUserPost = (user: Partial<UserDocument>) => {
  return baseUserSchema.validate(user, { abortEarly: false });
};
export const validateUserPatch = (user: Partial<UserDocument>) => {
  return patchUserSchema.validate(user, { abortEarly: false });
};
