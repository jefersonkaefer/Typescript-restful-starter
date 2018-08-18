import { config } from "./../../config";
import * as express from "express";
import * as jwt from "jsonwebtoken";

export function validateTokenJWT(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): void {
  jwt.verify(req.headers.authorization, config.SECRET, (err, result) => {
    if (err) {
      res
        .status(401)
        .send({ tokenError: { error: err.name, message: err.message } });
    }
    next();
  });
}
