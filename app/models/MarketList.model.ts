import {
  Entity,
  OneToMany,
  Column,
  JoinColumn,
  ManyToMany,
  JoinTable,
  RelationId
} from "typeorm";
import { BaseModel } from "../models/BaseModel.model";
import { Product } from "./Product.model";

@Entity("market_lists")
export class MarketList extends BaseModel {
  @Column()
  public name: string;
  @ManyToMany(type => Product, products => products.marketlists, {
    cascade: false,
    onUpdate: "SET NULL",
    onDelete: "NO ACTION",
    eager: true,
    persistence: true,
    nullable: true
  })
  @JoinTable({
    name: "marketlists_products"
  })
  public products: Product[];
}
