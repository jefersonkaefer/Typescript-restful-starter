import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IModel } from "../interfaces/IModel";

export abstract class BaseModel extends BaseEntity implements IModel {
  @PrimaryGeneratedColumn()
  public id: number;

  public get(): any {
    return this.constructor.name.toString();
  }
}
