import { Module } from '@nestjs/common';
import { ProductCatalogSqlService } from './product-catalog-sql.service';
import { ProductCatalogSqlResolver } from './product-catalog-sql.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductCatalogSql } from './dto/product-catalog-sql.output';

@Module({
  imports: [TypeOrmModule.forFeature([ProductCatalogSql])],
  providers: [ProductCatalogSqlResolver, ProductCatalogSqlService],
})
export class ProductCatalogSqlModule {}
