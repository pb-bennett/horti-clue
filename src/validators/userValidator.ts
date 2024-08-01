import Joi from 'joi';
import { UserType } from '../types/User';

const baseUserSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
});
const patchUserSchema = baseUserSchema.fork(Object.keys(baseUserSchema.describe().keys), (field) => field.optional());
export const validateUserPost = (user: Partial<UserType>) => {
  return baseUserSchema.validate(user, { abortEarly: false });
};
export const validateUserPatch = (user: Partial<UserType>) => {
  return patchUserSchema.validate(user, { abortEarly: false });
};
