import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@ObjectType({
  description: 'A product in the catalog',
})
@Entity({
  name: 'product_inventory',
})
export class ProductInventory {
  @Field(() => Int)
  @PrimaryColumn()
  id: number;

  @Field(() => String, {
    description: 'The sku of the product',
    nullable: false,
  })
  @Column()
  sku: string

  @Field(() => Int, {
    description: 'The name of the product',
    nullable: true,
  })
  @Column({
    name: 'stockunits',
  })
  stockUnits: number;
}
