import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductCatalogSqlModule } from './product-catalog-raw-sql/product-catalog-sql.module';
import { ProductDetail } from './product-details/entities/product-detail.entity';
import { ProductDetailsModule } from './product-details/product-details.module';
import { ProductCatalogSql } from './product-catalog-raw-sql/dto/product-catalog-sql.output';
import { ProductCatalogRelations } from './product-catalog-relations/entities/product-catalog-relations.entity';
import { ProductCatalogRelationsModule } from './product-catalog-relations/product-catalog-relations.module';
import { ProductPrice } from './product-price/entities/product-price.entity';
import { ProductInventory } from './product-inventory/entities/product-inventory.entity';
import { ProductCategory } from './product-category/entities/product-category.entity';
import { ProductCatalogFieldResolverModule } from './product-catalog-fields-resolvers/product-catalog-fields-resolvers.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      //   url: process.env.DATABASE_URL,
      host: 'localhost',
      port: 5499,
      username: 'root',
      password: 'password',
      database: 'postgres',
      synchronize: false,
      entities: [
        ProductDetail,
        ProductCatalogSql,
        ProductCatalogRelations,
        ProductPrice,
        ProductInventory,
        ProductCategory,
      ],
      logging: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
    ProductDetailsModule,
    ProductCatalogSqlModule,
    ProductCatalogRelationsModule,
    ProductCatalogFieldResolverModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
