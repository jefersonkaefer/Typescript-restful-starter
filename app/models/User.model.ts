import { IsEmail } from "class-validator";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseModel } from "../models/BaseModel.model";

@Entity("users")
export class User extends BaseModel {
  @Column()
  public name: string;

  @Column()
  public password: string;

  @Column()
  @IsEmail()
  public email: string;
}
