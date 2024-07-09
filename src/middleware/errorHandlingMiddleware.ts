import logger from "../utils/logger";

import { NextFunction, Request, Response } from "express";
import { CustomError } from "../types/types";
// interface CustomError extends Error {
//   status?: number;
// }

export const ErrorHandlingMiddleware = (
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("TEEEEST");
  logger.error(err.message);
  res.status(err.status || 500).json({ error: err.message });
};
