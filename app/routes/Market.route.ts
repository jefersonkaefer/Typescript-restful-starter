import * as express from "express";
import * as AuthMiddleware from "../middlewares/Auth.middleware";
import { MarketListController } from "../controllers/MarketList.controller";

export const MarketRoute: express.Router = express
  .Router()
  .post("/list/create", MarketListController.Create);
