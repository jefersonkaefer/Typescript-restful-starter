import * as express from "express";
import { UserController } from "../controllers/User.controller";
import * as AuthMiddleware from "../middlewares/Auth.middleware";
import * as UserMiddleware from "../middlewares/User.middleware";
export const UserRoute: express.Router = express
  .Router()
  .post(
    "/create",
    [UserMiddleware.CheckCreate],
    UserController.Create
  );
