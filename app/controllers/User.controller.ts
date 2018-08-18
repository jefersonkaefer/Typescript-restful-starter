import * as express from "express";
import { User } from "../models/User.model";
import { UserService } from "../services/User.service";

export class UserController {
  public static async Create(req: express.Request, res: express.Response) {
    const user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.password = await UserService.generateHashPassword(
      req.body.password,
      user.email
    );
    try {
      const User = await UserService.Save(user);
      return res
        .status(201)
        .send({ id: User.id, name: User.name, email: User.email });
    } catch (ex) {
      console.log(ex);
      return res.status(500).send({ text: "ERROR" });
    }
  }
}
