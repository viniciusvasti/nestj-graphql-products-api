import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductCatalogSqlModule } from './product-catalog-sql/product-catalog-sql.module';
import { ProductDetail } from './product-details/entities/product-detail.entity';
import { ProductDetailsModule } from './product-details/product-details.module';
import { ProductCatalogSql } from './product-catalog-sql/dto/product-catalog-sql.output';
import { ProductCatalogOrm } from './product-catalog-orm/entities/product-catalog-orm.entity';
import { ProductCatalogOrmModule } from './product-catalog-orm/product-catalog-orm.module';
import { ProductPrice } from './product-price/entities/product-price.entity';
import { ProductInventory } from './product-inventory/entities/product-inventory.entity';

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
      entities: [ProductDetail, ProductCatalogSql, ProductCatalogOrm, ProductPrice, ProductInventory],
      logging: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
    ProductDetailsModule,
    ProductCatalogSqlModule,
    ProductCatalogOrmModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
