import { Injectable } from '@nestjs/common';
import { ProductInventory } from './entities/product-inventory.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductInventoryService {
  constructor(
    @InjectRepository(ProductInventory)
    private repository: Repository<ProductInventory>,
  ) {}

  async findAll(): Promise<ProductInventory[]> {
    return await this.repository.find();
  }

  async findOne(id: number): Promise<ProductInventory> {
    return await this.repository.findOneBy({ id });
  }

  async findBySku(sku: string): Promise<ProductInventory> {
    return await this.repository.findOneBy({ sku });
  }
}
