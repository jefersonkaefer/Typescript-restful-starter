import { IsEmail } from "class-validator";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseModel } from "./BaseModel.model";

@Entity("samples")
export class Sample extends BaseModel {
  
  @Column("text")
  public text: string;

  @Column("text")
  @IsEmail()
  public email: string;
}
