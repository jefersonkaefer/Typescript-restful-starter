import * as express from "express";
import * as jwt from "express-jwt";
import { anyCheck, anyCheckTwo } from "../app/middlewares/Sample.middleware";
import { SampleRoute } from "../app/routes/Sample.route";
import { UserRoute } from "../app/routes/User.route";
import { config } from "../config";

interface IROUTER {
  path: string;
  middleware: any[];
  handler: express.Router;
}

export const ROUTER: IROUTER[] = [
  {
    handler: SampleRoute,
    middleware: [jwt({ secret: config.SECRET })],
    path: "/sample"
  },
  {
    handler: UserRoute,
    middleware: [anyCheck, anyCheckTwo],
    path: "/user"
  }
];
