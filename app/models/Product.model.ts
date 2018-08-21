import {
  Entity,
  ManyToOne,
  Column,
  JoinColumn,
  ManyToMany,
  JoinTable
} from "typeorm";
import { BaseModel } from "../models/BaseModel.model";
import { MarketList } from "./MarketList.model";

@Entity("products")
export class Product extends BaseModel {
  @Column({ nullable: false })
  public name: string;
  @ManyToMany(type => MarketList, marketList => marketList.products, {
    cascade: false,
    eager: false,
    persistence: true,
    nullable: false
  })
  @JoinTable({ name: "marketlist_products" })
  public marketLists: MarketList[];
}
