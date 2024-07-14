import logger from "../utils/logger";

import { NextFunction, Request, Response } from "express";
import { CustomError } from "../utils/CustomError";

export const ErrorHandlingMiddleware = (
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.error(err.message);
  res
    .status(err.status || 500)
    .json({ status: err.type || "error", data: { message: err.message } });
};
