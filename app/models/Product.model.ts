import { Entity, Column, ManyToMany, JoinTable } from "typeorm";
import { BaseModel } from "../models/BaseModel.model";
import { MarketList } from "./MarketList.model";

@Entity("products")
export class Product extends BaseModel {
  @Column({ nullable: false })
  public name: string;
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
  public marketlists: MarketList[];
}
