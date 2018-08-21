import { EntityManager, EntityRepository } from "typeorm";
import { BaseRepository } from "../repository/BaseRepository.repository";
import { MarketList } from "../models/MarketList.model";

@EntityRepository(MarketList)
export class MarketListRepository extends BaseRepository {
  constructor(private EntityManager: EntityManager) {
    super(EntityManager, new MarketList());
  }
}
