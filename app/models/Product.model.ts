import {
  Entity,
  Column,
  ManyToMany,
  JoinTable,
  Index,
  OneToOne,
  JoinColumn,
  ManyToOne
} from "typeorm";
import { BaseModel } from "../models/BaseModel.model";
import { MarketList } from "./MarketList.model";
import { Category } from "./Category.model";

@Entity("products")
export class Product extends BaseModel {
  @Column({ nullable: false })
  @Index("product-name", { unique: true })
  public name: string;

  @Column({ nullable: true })
  @Index("product-code", { unique: true })
  public code: string;

  @ManyToMany(type => MarketList, marketlists => marketlists.products, {
    cascade: true,
    onDelete: "NO ACTION",
    onUpdate: "SET NULL",
    persistence: true,
    nullable: false
  })
  @JoinTable({
    name: "marketlists_products"
  })
  @ManyToOne(type => Category, category => category.products, {
    cascade: true,
    persistence: true
  })
  public category: Category;
}
