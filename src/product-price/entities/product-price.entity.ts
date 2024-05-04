import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@ObjectType({
  description: "A product's price",
})
@Entity({
  name: 'product_price',
})
export class ProductPrice {
  @Field(() => Int)
  @PrimaryColumn()
  id: number;

  @Field(() => Int, {
    description: 'The sku of the product',
    nullable: false,
  })
  @Column()
  sku: number;

  @Field(() => String, {
    description: 'The name of the product',
    nullable: true,
  })
  price: number;
}
