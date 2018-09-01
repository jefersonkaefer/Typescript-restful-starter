import {
  Entity,
  Column,
  ManyToMany,
  JoinTable,
  Index,
  OneToMany
} from "typeorm";
import { BaseModel } from "../models/BaseModel.model";
import { Product } from "./Product.model";

@Entity("categorys")
export class Category extends BaseModel {
  @Column({ nullable: false })
  @Index("category-name", { unique: true })
  public name: string;

  @Column({ nullable: true })
  public code: string;
  @OneToMany(type => Product, product => product.category)
  products: Product[];
}
