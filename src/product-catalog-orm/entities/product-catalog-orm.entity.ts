import { ObjectType, Field, Int } from '@nestjs/graphql';
import { ProductCategory } from 'src/product-category/entities/product-category.entity';
import { ProductInventory } from 'src/product-inventory/entities/product-inventory.entity';
import { ProductPrice } from 'src/product-price/entities/product-price.entity';
import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';

@ObjectType({
  description: 'A product in the catalog',
})
@Entity({
  name: 'product_details',
})
export class ProductCatalogOrm {
  @Field(() => Int, { nullable: true })
  @PrimaryColumn()
  id: number;

  @Field(() => String, {
    description: 'The sku of the product',
  })
  @Column()
  sku: string;

  @Field(() => String, {
    description: 'The name of the product',
  })
  @Column()
  name: string;

  @Field(() => String, {
    description: 'The description of the product',
    nullable: true,
  })
  @Column()
  description: string;

  @Field(() => Int, {
    description: 'The categoryId of the product',
    nullable: true,
  })
  @Column({
    name: 'category_id',
  })
  categoryId: number;

  @Field(() => ProductPrice, {
    nullable: true,
  })
  @OneToOne(() => ProductPrice)
  @JoinColumn({ name: 'sku', referencedColumnName: 'sku' })
  price: ProductPrice;

  @Field(() => ProductInventory, {
    nullable: true,
  })
  @OneToOne(() => ProductInventory)
  @JoinColumn({ name: 'sku', referencedColumnName: 'sku' })
  inventory: ProductInventory;

  @Field(() => ProductCategory, {
    description: 'The category of the product',
    nullable: true,
  })
  @OneToOne(() => ProductCategory)
  @JoinColumn({ name: 'category_id', referencedColumnName: 'id' })
  category: ProductCategory;
}
