import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType({
  description: 'A product in the catalog',
})
export class ProductCatalogSql {
  @Field(() => Int, { nullable: true })
  id: number;

  @Field(() => Int, {
    description: 'The sku of the product',
  })
  sku: number;

  @Field(() => String, {
    description: 'The name of the product',
  })
  name: string;

  @Field(() => String, {
    description: 'The description of the product',
    nullable: true,
  })
  description: string;

  @Field(() => String, {
    description: 'The stockUnits of the product',
    nullable: true,
  })
  stockUnits: number;

  @Field(() => String, {
    description: 'The price of the product',
    nullable: true,
  })
  price: number;

  @Field(() => Int, {
    description: 'The categoryId of the product',
    nullable: true,
  })
  categoryId: number;
}
