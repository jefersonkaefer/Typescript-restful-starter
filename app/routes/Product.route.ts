import * as express from "express";
import { ProductController } from "../controllers/Product.controller";

export const ProductRoute: express.Router = express
  .Router()
  .post("/", ProductController.Create)
  .get("/", ProductController.GetAllProducts);
