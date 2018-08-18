import { JWTService } from "./Jwt.service";
import * as crypto from "crypto";
import { getCustomRepository } from "typeorm";
import { User } from "../models/User.model";
import { UserRepository } from "../repository/User.repository";

export class UserService {
  public static FindUser(email: string, password: string): Promise<User> {
    const User: any = getCustomRepository(UserRepository).findUserAccount(
      email,
      password
    );
    return User;
  }
  public static async Authenticate(
    email: string,
    password: string
  ): Promise<String> {
    const User: any = await this.FindUser(
      email,
      this.generateHashPassword(password, email)
    );
    return await JWTService.signToken({
      id: User.id,
      email: User.email,
      name: User.name
    },{expiresIn: 1 * 60});
  }
  public static async Save(user: User): Promise<User> {
    const User: any = await getCustomRepository(UserRepository).save(user);
    return User;
  }
  public static generateHashPassword(password: string, email: string): string {
    const hash = crypto.createHmac("sha512", email);
    hash.update(password);
    return hash.digest("hex");
  }
}
