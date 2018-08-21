import { IsEmail } from "class-validator";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, Index } from "typeorm";
import { BaseModel } from "../models/BaseModel.model";

@Entity("users")
export class User extends BaseModel {
  @Column()
  public name: string;

  @Column() 
  public password: string;

  @Column()
  @IsEmail()
  @Index({ unique: true })
  public email: string;
}
