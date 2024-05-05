import { Injectable } from '@nestjs/common';
import { ProductCategory } from './entities/product-category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductCategoryService {
  constructor(
    @InjectRepository(ProductCategory)
    private repository: Repository<ProductCategory>,
  ) {}

  async findAll(): Promise<ProductCategory[]> {
    return await this.repository.find();
  }

  async findOne(id: number): Promise<ProductCategory> {
    return await this.repository.findOneBy({ id });
  }
}
