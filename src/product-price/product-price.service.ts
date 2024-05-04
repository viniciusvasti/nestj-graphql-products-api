import { Injectable } from '@nestjs/common';
import { ProductPrice } from './entities/product-price.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductPricesService {
  constructor(
    @InjectRepository(ProductPrice)
    private repository: Repository<ProductPrice>,
  ) {}

  async findAll(): Promise<ProductPrice[]> {
    return await this.repository.find();
  }

  async findOne(id: number): Promise<ProductPrice> {
    return await this.repository.findOneBy({ id });
  }
}