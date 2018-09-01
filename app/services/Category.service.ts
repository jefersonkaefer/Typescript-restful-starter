import { Category } from "./../models/Category.model";
import { getCustomRepository } from "typeorm";
import { CategoryRepository } from "../repository/Category.repository";

export class CategoryService {
  public static async Save(category: Category): Promise<Category> {
    const Category: any = await getCustomRepository(CategoryRepository).save(
      category
    );
    return Category;
  }
  public static async FindById(id: number): Promise<any> {
    const Category = await getCustomRepository(CategoryRepository).findOneById(
      id
    );
    return Category;
  }
}
