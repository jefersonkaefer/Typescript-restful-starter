import { Product } from "./../models/Product.model";
import { EntityManager, EntityRepository } from "typeorm";
import { BaseRepository } from "../repository/BaseRepository.repository";
import { MarketList } from "../models/MarketList.model";

@EntityRepository(MarketList)
export class MarketListRepository extends BaseRepository {
  constructor(private EntityManager: EntityManager) {
    super(EntityManager, new MarketList());
  }
  private responses: any = [];
  public async removeProductFromMarketList(products: Array<Product>) {
    await products.forEach(product => {
      this.EntityManager.query(
        'DELETE  FROM public.marketlists_products WHERE "productsId"=' +
          product.id
      )
        .then(response => {
          this.responses.push(response);
        })
        .catch(error => console.log("error....", error));
    });
    return this.responses;
  }
}
