import { Product } from "./../models/Product.model";
import * as express from "express";
import { ProductService } from "../services/Product.service";

export class ProductController {
  public static async Create(req: express.Request, res: express.Response) {
    const product: Product = new Product();
    product.name = req.body.name;
    product.id = req.body.id;
    product.marketlists = req.body.marketlists;
    console.log(product);

    try {
      const response = await ProductService.Save(product);
      return res.status(201).send({ id: response.id, name: response.name });
    } catch (ex) {
      console.log(ex);
      return res.status(500).send({
        error: { code: ex.code, errno: ex.errno }
      });
    }
  }
  public static async GetAllProducts(
    req: express.Request,
    res: express.Response
  ) {
    try {
      const response = await ProductService.FindAllProductsFree();
      console.log(response);
      return res.status(200).send(response);
    } catch (ex) {
      console.log(ex);
      return res.status(204).send({
        error: { code: ex.code, errno: ex.errno }
      });
    }
  }
}
