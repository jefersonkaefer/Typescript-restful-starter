import { EntityManager, EntityRepository } from "typeorm";
import { BaseRepository } from "../repository/BaseRepository.repository";
import { Item } from "../models/Item.model";

@EntityRepository(Item)
export class ItemRepository extends BaseRepository {
  constructor(private EntityManager: EntityManager) {
    super(EntityManager, new Item());
  }
}
