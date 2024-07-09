import { CustomError } from "../types/types";

// interface CustomError extends Error {
//   status?: number;
// }

const errorHandler = (message: string, errorCode: number): never => {
  const newError: CustomError = new Error(message);
  newError.status = errorCode;
  throw newError;
};

export { errorHandler };
