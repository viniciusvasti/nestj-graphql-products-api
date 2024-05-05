import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
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

  @Field(() => String, {
    description: 'The sku of the product',
    nullable: false,
  })
  @Column()
  sku: string

  @Field(() => Float, {
    description: 'The name of the product',
    nullable: true,
  })
  @Column()
  price: number;
}
