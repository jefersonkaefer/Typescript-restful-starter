import { Product } from "./../models/Product.model";
import * as express from "express";
import { ProductService } from "../services/Product.service";
import { isNull } from "util";
import { IsEmpty } from "class-validator";
import { DatabaseError } from "../services/DatabaseError.helper";

export class ProductController {
  public static async Create(req: express.Request, res: express.Response) {
    const product: Product = new Product();
    product.name = req.body.name;
    product.category = req.body.category;
    try {
      const response = await ProductService.Save(product);
      return res.status(201).send({ id: response.id, name: response.name });
    } catch (ex) {
      console.log(ex);
      return res.status(500).send({
        error: await DatabaseError.getMessageError(ex)
      });
    }
  }
  public static async GetAllProducts(
    req: express.Request,
    res: express.Response
  ) {
    try {
      const response = await ProductService.FindAllProductsFree();
      if (IsEmpty(response)) {
        return res.status(204).send();
      }
      return res.status(200).send(response);
    } catch (ex) {
      console.log(ex);
      return res.status(500).send({
        error: { code: ex.code, errno: ex.errno }
      });
    }
  }
}
