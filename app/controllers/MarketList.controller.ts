import * as express from "express";
import { MarketListService } from "../services/MarketList.service";
import { MarketList } from "../models/MarketList.model";
export class MarketListController {
  public static async Create(req: express.Request, res: express.Response) {
    const marketList: MarketList = new MarketList();
    marketList.name = req.body.name;
    marketList.products = req.body.products;
    console.log(marketList);

    try {
      const response = await MarketListService.Save(marketList);
      return res.status(201).send({ response });
    } catch (ex) {
      console.log(ex);
      return res.status(500).send({
        error: { code: ex.code, errno: ex.errno }
      });
    }
  }
}
