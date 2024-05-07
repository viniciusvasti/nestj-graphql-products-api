import { ObjectType, Field, Int } from '@nestjs/graphql';
import { ProductCategory } from '../../product-category/entities/product-category.entity';
import { ProductInventory } from '../../product-inventory/entities/product-inventory.entity';
import { ProductPrice } from '../../product-price/entities/product-price.entity';

@ObjectType({
  description: 'A product in the catalog',
})
export class ProductCatalogFieldResolver {
  @Field(() => Int, { nullable: true })
  id: number;

  @Field(() => String, {
    description: 'The sku of the product',
  })
  sku: string;

  @Field(() => String, {
    description: 'The name of the product',
  })
  name: string;

  @Field(() => String, {
    description: 'The description of the product',
    nullable: true,
  })
  description: string;

  @Field(() => Int, {
    description: 'The categoryId of the product',
    nullable: true,
  })
  categoryId: number;

  @Field(() => ProductPrice, {
    nullable: true,
  })
  price: ProductPrice;

  @Field(() => ProductInventory, {
    nullable: true,
  })
  inventory: ProductInventory;

  @Field(() => ProductCategory, {
    description: 'The category of the product',
    nullable: true,
  })
  category: ProductCategory;
}
