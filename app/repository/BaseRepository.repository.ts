import { EntityRepository, Repository, EntityManager } from "typeorm";
import { IModel } from "../interfaces/IModel";

@EntityRepository()
export abstract class BaseRepository {
  constructor(private manager: EntityManager, public Entity: IModel) {}

  createAndSave(Entity: IModel) {
    return this.manager.save(Entity);
  }
  public async removeById(id: number): Promise<IModel> {
    const itemToRemove: any = await this.manager.findOne(this.Entity.get(), {
      id
    });
    return this.manager.remove(itemToRemove);
  }

  findByName(name: string) {
    return this.manager.findOne(this.Entity.constructor, {
      name
    });
  }
  public findByText(text: string): Promise<IModel[]> {
    let result: any = this.manager.find(this.Entity.get(), { where: { text } });
    return result;
  }

  public findOneById(id: number): Promise<IModel> {
    let result: any = this.manager.findOneOrFail(this.Entity.get(), {
      where: { id }
    });
    return result;
  }
  public save(entity: IModel): Promise<IModel> {
    return this.manager.save(entity);
  }
  public findAll(): Promise<IModel[]> {
    return this.manager.find(this.Entity.get());
  }
}
