import { config } from "./../../config";
import * as express from "express";
import * as jwt from "jsonwebtoken";
import { JWTService } from "../services/Jwt.service";
export function anyCheck(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): void {
  const value: string = "this";
  const value2: string = "this";
  value === value2 ? next() : res.json({ error: "error anyCheck" });
}
export function validateTokenJWT(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): void {
  jwt.verify(req.headers.authorization, config.SECRET, (err, result) => {
    if (err) {
      console.log("Auth error", err);
      res.status(401).send("Failed on second middleware");
    }
    next();
  });
}
export function anyCheckTwo(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): void {
  const value: string = "this";
  const value2: string = "this";
  value === value2 ? next() : res.json({ error: "error anyCheck" });
}

export function CheckCreate(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  req.body.email &&
  req.body.name &&
  req.body.password &&
  typeof req.body.email === "string" &&
  typeof req.body.name === "string" &&
  typeof req.body.password === "string"
    ? next()
    : res.status(400).send({ text: "ERROR" });
}

export function CheckUpdate(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  req.body.id &&
  req.body.text &&
  typeof req.body.id === "number" &&
  typeof req.body.text === "string"
    ? next()
    : res.status(404).send({ text: "ERROR" });
}

export function CheckDelete(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  req.body.id && typeof req.body.id === "number"
    ? next()
    : res.status(404).send({ text: "ERROR" });
}
