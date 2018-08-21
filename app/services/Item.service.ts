import { getCustomRepository } from "typeorm";
import { ItemRepository } from "../repository/Item.repository";
import { Item } from "../models/Item.model";

export class ItemService {
  public static async Save(item: Item): Promise<Item> {
    const Item: any = await getCustomRepository(ItemRepository).save(item);
    console.log(Item);
    return Item;
  }
}
