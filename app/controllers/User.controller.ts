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
  public static async Create(req: express.Request, res: express.Response) {
    const user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.password = await UserService.generateHashPassword(
      req.body.password,
      user.email
    );
    try {
      const response = await UserService.Save(user);
      return res
        .status(201)
        .send({ id: response.id, name: response.name, email: response.email });
    } catch (ex) {
      console.log(ex);
      return res.status(500).send({ text: "ERROR" });
    }
  }
}
