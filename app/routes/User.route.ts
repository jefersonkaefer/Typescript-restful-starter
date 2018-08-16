import * as express from "express";
import { UserController } from "../controllers/User.controller";
import * as SampleMiddleware from "../middlewares/Sample.middleware";
export const UserRoute: express.Router = express
  .Router()
  .post("/", [SampleMiddleware.validateTokenJWT], UserController.Authenticate);
