import { Module } from '@nestjs/common';
import { DataloaderService } from './dataloader.service';
import { ProductCategoryModule } from '../product-category/product-category.module';
import { ProductPricesModule } from '../product-price/product-price.module';
import { ProductInventoryModule } from '../product-inventory/product-inventory.module';

@Module({
  providers: [DataloaderService],
  exports: [DataloaderService],
  imports: [ProductCategoryModule, ProductPricesModule, ProductInventoryModule],
})
export class DataloaderModule {}
