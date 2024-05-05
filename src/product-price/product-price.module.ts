import { Module } from '@nestjs/common';
import { ProductPricesService } from './product-price.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductPrice } from './entities/product-price.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductPrice])],
  providers: [ProductPricesService],
  exports: [ProductPricesService],
})
export class ProductPricesModule {}
