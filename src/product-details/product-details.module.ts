import { Module } from '@nestjs/common';
import { ProductDetailsService } from './product-details.service';
import { ProductDetailsResolver } from './product-details.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductDetail } from './entities/product-detail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductDetail])],
  providers: [ProductDetailsResolver, ProductDetailsService],
})
export class ProductDetailsModule {}
