import { createConnection } from "typeorm";
import { Sample } from "../app/models/Sample.model";
import { config, DIALECT } from "../config";
import { User } from "../app/models/User.model";

export const Connection = createConnection({
  database: config.DATABASE.DB,
  entities: [Sample, User],
  host: config.DATABASE.SERVER,
  logging: false,
  password: config.DATABASE.PASSWORD,
  port: config.DATABASE.PORT_DB,
  synchronize: true,
  type: DIALECT,
  username: config.DATABASE.USER_DB
});
