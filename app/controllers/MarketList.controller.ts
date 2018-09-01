import * as express from "express";
import { MarketListService } from "../services/MarketList.service";
import { MarketList } from "../models/MarketList.model";
export class MarketListController {
  public static async Create(req: express.Request, res: express.Response) {
    const marketList: MarketList = new MarketList();
    marketList.name = req.body.name;
    marketList.id = req.body.id;
    marketList.products = req.body.products;
    console.log(marketList);

    try {
      if (marketList.id == 0) {
        const response = await MarketListService.RemoveProductFromMarketList(
          marketList.products
        );
        console.log(response);
        return res.status(201).send(response);
      } else {
        const response = await MarketListService.Save(marketList);
        return res.status(201).send({ id: response.id, name: response.name });
      }
    } catch (ex) {
      console.log(ex);
      return res.status(500).send({
        error: { code: ex.code, errno: ex.errno }
      });
    }
  }
  public static async GetList(req: express.Request, res: express.Response) {
    const marketList: MarketList = new MarketList();
    marketList.id = req.body.id;
    try {
      const response = await MarketListService.FindMarketList(marketList);
      console.log(response);
      return res.status(200).send({
        id: response.id,
        name: response.name,
        products: response.products
      });
    } catch (ex) {
      console.log(ex);
      return res.status(500).send({
        error: { code: ex.code, errno: ex.errno }
      });
    }
  }
  public static async GetAllLists(req: express.Request, res: express.Response) {
    try {
      const response = await MarketListService.FindAllLists();
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
