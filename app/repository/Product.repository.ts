import { Product } from "./../models/Product.model";
import { EntityManager, EntityRepository } from "typeorm";
import { BaseRepository } from "../repository/BaseRepository.repository";

@EntityRepository(Product)
export class ProductRepository extends BaseRepository {
  constructor(private EntityManager: EntityManager) {
    super(EntityManager, new Product());
  }
  public async getProductsFree() {
    return await this.EntityManager.query(
      "SELECT id, name " +
        'FROM public.products WHERE id not IN(SELECT "productsId" ' +
        "FROM public.marketlists_products)"
    )
      .then(response => {
        return response;
      })
      .catch(error => console.log("error....", error));
  }
}
