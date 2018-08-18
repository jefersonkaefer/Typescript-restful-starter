import { EntityManager, EntityRepository } from "typeorm";

import { User } from "../models/User.model";
import { BaseRepository } from "../repository/BaseRepository.repository";

@EntityRepository(User)
export class UserRepository extends BaseRepository {
  constructor(private EntityManager: EntityManager) {
    super(EntityManager, new User());
  }

  public findUserAccount(email: string, password: string): Promise<User> {
    let result: any = this.EntityManager.findOneOrFail(this.Entity.get(), {
      where: { email, password }
    });
    return result;
  }
}
