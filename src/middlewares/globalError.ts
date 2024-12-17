import { Request, Response, NextFunction } from "express";

import { ApiError } from "@/helpers/error";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { sendErrorResponse } from "@/helpers/responseBuilder";

const globalErrorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  if (err instanceof ApiError) {
    res.status(400).send(sendErrorResponse({ message: err.message }));
  } else if (err instanceof PrismaClientKnownRequestError) {
    res
      .status(409)
      .send(sendErrorResponse({ message: err.message, code: err.code }));
  } else {
    res.status(400).send(sendErrorResponse({ message: err.message }));
  }
};

export default globalErrorHandler;
