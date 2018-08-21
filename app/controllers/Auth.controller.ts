import * as express from "express";
import { UserService } from "../services/User.service";

export class AuthController {
  public static async Authenticate(
    req: express.Request,
    res: express.Response
  ) {
    try {
      const token = await UserService.Authenticate(
        req.body.email,
        req.body.password
      );
      return res.status(200).send({ token: token });
    } catch (ex) {
      return res
        .status(204)
        .send({ text: "ERROR: User not found", token: false });
    }
  }
}
