import { Category } from "./../models/Category.model";
import { EntityManager, EntityRepository } from "typeorm";
import { BaseRepository } from "../repository/BaseRepository.repository";

@EntityRepository(Category)
export class CategoryRepository extends BaseRepository {
  constructor(private EntityManager: EntityManager) {
    super(EntityManager, new Category());
  }
}
