import { CustomError } from "./CustomError";
import Joi from "joi";

// interface CustomError extends Error {
//   status?: number;
// }

export const throwError = (
  error: string | Joi.ValidationError,
  errorCode: number
): never => {
  if (typeof error === "string") {
    throw new CustomError(error, errorCode);
  }
  if (error instanceof Joi.ValidationError) {
    const message = error.details.map((detail) => detail.message).join(", ");
    throw new CustomError(message, 400);
  }
  throw new CustomError("Error handling failure", 500);
};
