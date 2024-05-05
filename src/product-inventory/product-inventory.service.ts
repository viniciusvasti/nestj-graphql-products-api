import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { ProductInventory } from './entities/product-inventory.entity';

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

  async findAllBySkus(skus: string[]): Promise<ProductInventory[]> {
    return await this.repository.findBy({ sku: In(skus) });
  }
}
