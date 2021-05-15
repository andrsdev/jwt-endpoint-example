/* eslint-disable @typescript-eslint/no-unused-vars */

/* 
  Error middlewares documentation:
  https://expressjs.com/en/guide/error-handling.html
*/

import { config } from "config";
import { NextFunction, Request, Response } from "express";

function buildError({ message, stack }: Error): Record<string, unknown> {
  if (config.dev) {
    return {
      error: message,
      stack: stack,
    };
  }
  return { error: message };
}

function errorHandler(
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
): void {
  res.status(400);
  res.json(buildError(err));
}

export { errorHandler };
