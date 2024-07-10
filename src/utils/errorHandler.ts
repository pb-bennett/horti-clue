import { CustomError } from "../types/types";

// interface CustomError extends Error {
//   status?: number;
// }

const throwError = (message: string, errorCode: number): never => {
  const newError: CustomError = new Error(message);
  newError.status = errorCode;
  newError.type = newError.status >= 500 || !newError.status ? "error" : "fail";
  throw newError;
};

export { throwError };
