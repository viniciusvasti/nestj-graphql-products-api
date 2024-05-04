import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@ObjectType({
  description: 'A product in the catalog',
})
@Entity({
  name: 'product_details',
})
export class ProductDetail {
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
    nullable: false,
  })
  @Column()
  name: string;

  @Field(() => String, {
    description: 'The description of the product',
    nullable: false,
  })
  @Column()
  description: string;

  @Field(() => Int, {
    description: 'The categoryId of the product',
    nullable: false,
  })
  @Column({
    name: 'category_id',
  })
  categoryId: number;
}
