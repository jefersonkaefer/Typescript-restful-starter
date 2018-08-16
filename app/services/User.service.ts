import { JWTService } from "./Jwt.service";
import { getCustomRepository } from "typeorm";
import { User } from "../models/User.model";
import { UserRepository } from "../repository/User.repository";

export class UserService {
  public static FindUser(email: string, password: string): Promise<User> {
    let User: any = getCustomRepository(UserRepository).findUserAccount(
      email,
      password
    );
    return User;
  }
  public static async Authenticate(
    email: string,
    password: string
  ): Promise<String> {
    let User: any = await this.FindUser(email, password);
    return await JWTService.signToken({ email: User.email, name: User.name });
  }
}
