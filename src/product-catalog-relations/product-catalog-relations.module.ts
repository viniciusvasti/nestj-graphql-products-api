import { Module } from '@nestjs/common';
import { ProductCatalogRelationsService } from './product-catalog-relations.service';
import { ProductCatalogRelationsResolver } from './product-catalog-relations.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductCatalogRelations } from './entities/product-catalog-relations.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductCatalogRelations])],
  providers: [ProductCatalogRelationsResolver, ProductCatalogRelationsService],
})
export class ProductCatalogRelationsModule {}
