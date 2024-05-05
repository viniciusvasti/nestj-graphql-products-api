import { Module } from '@nestjs/common';
import { ProductCatalogOrmService } from './product-catalog-orm.service';
import { ProductCatalogOrmResolver } from './product-catalog-orm.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductCatalogOrm } from './entities/product-catalog-orm.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductCatalogOrm])],
  providers: [ProductCatalogOrmResolver, ProductCatalogOrmService],
})
export class ProductCatalogOrmModule {}
