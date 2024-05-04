import { Module } from '@nestjs/common';
import { ProductInventoryService } from './product-inventory.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductInventory } from './entities/product-inventory.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductInventory])],
  providers: [ProductInventoryService],
})
export class ProductInventoryModule {}
