import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductDetailsModule } from './product-details/product-details.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductDetail } from './product-details/entities/product-detail.entity';

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
      entities: [ProductDetail],
      logging: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
    ProductDetailsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
