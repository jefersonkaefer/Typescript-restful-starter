import * as express from "express";
import { anyCheck, anyCheckTwo } from "../app/middlewares/User.middleware";
import { validateTokenJWT } from "../app/middlewares/Auth.middleware";
import { UserRoute } from "../app/routes/User.route";
import { AuthRoute } from "../app/routes/Auth.route";

interface IROUTER {
  path: string;
  middleware: any[];
  handler: express.Router;
}

export const ROUTER: IROUTER[] = [
  {
    handler: AuthRoute,
    middleware: [anyCheck, anyCheckTwo],
    path: "/authenticate"
  },
  {
    handler: UserRoute,
    middleware: [anyCheck, anyCheckTwo, validateTokenJWT],
    path: "/user"
  }
];
