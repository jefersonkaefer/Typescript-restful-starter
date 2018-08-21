import {
  Entity,
  OneToMany,
  Column,
  JoinColumn,
  ManyToMany,
  JoinTable
} from "typeorm";
import { BaseModel } from "../models/BaseModel.model";
import { Product } from "./Product.model";

@Entity("market_list")
export class MarketList extends BaseModel {
  @ManyToMany(type => Product, products => products.marketLists, {
    cascade: true,
    eager: true,
    persistence: true,
    nullable: false
  })
  @JoinTable({ name: "marketlist_products" })
  public products: Product[];
  @Column()
  public name: string;
}
