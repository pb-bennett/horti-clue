import { CustomError } from "./CustomError";

// interface CustomError extends Error {
//   status?: number;
// }

const throwError = (message: string, errorCode: number): never => {
  const error = new CustomError(message, errorCode);
  throw error;
};

export { throwError };
