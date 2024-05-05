import { Injectable } from '@nestjs/common';
import { ProductCategory } from './entities/product-category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';

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

  async findAllByIds(ids: number[]): Promise<ProductCategory[]> {
    return await this.repository.findBy({ id: In(ids) });
  }
}
