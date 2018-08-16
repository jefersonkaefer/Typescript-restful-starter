import * as express from "express";
import { UserController } from "../controllers/User.controller";
import * as UserMiddleware from "../middlewares/User.middleware";
export const UserRoute: express.Router = express
  .Router()
  .post("/authenticate", UserController.Authenticate)
  .post(
    "/create",
    [UserMiddleware.CheckCreate, UserMiddleware.validateTokenJWT],
    UserController.Create
  );
