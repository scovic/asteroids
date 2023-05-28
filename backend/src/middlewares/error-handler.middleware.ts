import { NextFunction, Response, Request} from "express";
import { BadRequestError } from "../errors/BadRequestError";
import { NotFoundError } from "../errors/NotFoundError";

export function errorHandlerMiddleware(error: Error, _: Request, res: Response, next: NextFunction): void {
  const { message } = error;

  if (error instanceof BadRequestError) {
    res.status(400).json({ name: "BadRequestError",  message });
  } else if (error instanceof NotFoundError) {
    res.status(404).json({ name: "NotFoundError", message });
  } else {
    res.status(500).json({ message: "Internal Server Error" });
  }

  next();
}
