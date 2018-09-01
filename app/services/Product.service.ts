import { Product } from "./../models/Product.model";
import { getCustomRepository } from "typeorm";
import { ProductRepository } from "../repository/Product.repository";

export class ProductService {
  public static async Save(product: Product): Promise<Product> {
    const Product: any = await getCustomRepository(ProductRepository).save(
      product
    );
    return Product;
  }
  public static async FindAllProducts(): Promise<any> {
    const res = getCustomRepository(ProductRepository).findAll();
    console.log("esse eh res", res);
    return res;
  }
  public static async FindAllProductsFree(): Promise<any> {
    const res = await getCustomRepository(ProductRepository).getProductsFree();
    console.log("esse eh res", res);
    return res;
  }
}
