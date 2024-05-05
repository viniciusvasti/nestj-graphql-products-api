import { Module } from '@nestjs/common';
import { DataloaderService } from './dataloader.service';
import { ProductCategoryModule } from 'src/product-category/product-category.module';
import { ProductPricesModule } from 'src/product-price/product-price.module';
import { ProductInventoryModule } from 'src/product-inventory/product-inventory.module';

@Module({
  providers: [DataloaderService],
  exports: [DataloaderService],
  imports: [ProductCategoryModule, ProductPricesModule, ProductInventoryModule],
})
export class DataloaderModule {}
