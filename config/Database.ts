import { createConnection } from "typeorm";
import { config, DIALECT } from "../config";
import { User } from "../app/models/User.model";
import { MarketList } from "../app/models/MarketList.model";
import { Product } from "../app/models/Product.model";
import { Category } from "../app/models/Category.model";

export const Connection = createConnection({
  database: config.DATABASE.DB,
  entities: [User, MarketList, Product, Category],
  host: config.DATABASE.SERVER,
  logging: false,
  password: config.DATABASE.PASSWORD,
  port: config.DATABASE.PORT_DB,
  synchronize: true,
  type: DIALECT,
  username: config.DATABASE.USER_DB
});
