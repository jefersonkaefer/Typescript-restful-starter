import * as express from "express";
import { User } from "../models/User.model";
import { UserService } from "../services/User.service";

export class UserController {
  public static async Authenticate(
    req: express.Request,
    res: express.Response
  ) {
    try {
      let Result = await UserService.Authenticate(
        req.body.email,
        req.body.password
      );
      return res.status(200).send({ token: Result });
    } catch (ex) {
      console.log(ex);
      return res
        .status(404)
        .send({ text: "ERROR: User not found", token: false });
    }
  }
}
