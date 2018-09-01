import { Product } from "./../models/Product.model";
import { getCustomRepository } from "typeorm";
import { MarketListRepository } from "../repository/MarketList.repository";
import { MarketList } from "../models/MarketList.model";

export class MarketListService {
  public static async Save(marketList: MarketList): Promise<MarketList> {
    const _MarketList: any = await getCustomRepository(
      MarketListRepository
    ).findOneById(marketList.id);
    console.log(_MarketList);
    marketList.products.forEach(product => {
      _MarketList.products.push(product);
    });
    const MarketList: any = await getCustomRepository(
      MarketListRepository
    ).save(_MarketList);
    console.log(MarketList);
    return MarketList;
  }

  public static async FindMarketLists(marketlist_id: Array<any>): Promise<any> {
    const marketLists: Array<any> = new Array();
    marketlist_id.forEach(response => {
      marketLists.push(
        getCustomRepository(MarketListRepository).findOneById(response.id)
      );
    });
    console.log("market lists", marketLists);
    return marketLists;
  }

  public static async FindMarketList(marketList: MarketList): Promise<any> {
    return getCustomRepository(MarketListRepository).findOneById(marketList.id);
  }
  public static async FindAllLists(): Promise<any> {
    const res = getCustomRepository(MarketListRepository).findAll();
    console.log("esse eh res", res);
    return res;
  }
  public static async RemoveProductFromMarketList(
    products: Array<Product>
  ): Promise<any> {
    const res = getCustomRepository(
      MarketListRepository
    ).removeProductFromMarketList(products);
    console.log("removee...:", res);
    return res;
  }
}
