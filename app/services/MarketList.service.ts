import { JWTService } from "./Jwt.service";
import * as crypto from "crypto";
import { getCustomRepository } from "typeorm";
import { User } from "../models/User.model";
import { MarketListRepository } from "../repository/MarketList.repository";
import { MarketList } from "../models/MarketList.model";

export class MarketListService {
  public static async Save(marketList: MarketList): Promise<MarketList> {
    const MarketList: any = await getCustomRepository(MarketListRepository).save(
      marketList
    );
    console.log(MarketList);
    return MarketList;
  }
}
