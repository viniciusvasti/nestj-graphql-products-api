import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductDetailsModule } from '../product-details/product-details.module';
import { ProductCatalogFieldResolver } from './dto/product-catalog-fields-resolvers.output';
import { ProductCatalogFieldResolverResolver } from './product-catalog-fields-resolvers.resolver';
import { ProductCategoryModule } from '../product-category/product-category.module';
import { ProductInventoryModule } from '../product-inventory/product-inventory.module';
import { ProductPricesModule } from '../product-price/product-price.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductCatalogFieldResolver]),
    ProductDetailsModule,
    ProductInventoryModule,
    ProductPricesModule,
    ProductCategoryModule,
  ],
  providers: [ProductCatalogFieldResolverResolver],
})
export class ProductCatalogFieldResolverModule {}
