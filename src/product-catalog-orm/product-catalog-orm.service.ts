import { Injectable } from '@nestjs/common';
import { ProductCatalogOrm } from './entities/product-catalog-orm.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductCatalogOrmService {
  constructor(
    @InjectRepository(ProductCatalogOrm)
    private repository: Repository<ProductCatalogOrm>,
  ) {}

  async findAll(): Promise<ProductCatalogOrm[]> {
    return await this.repository.find({ relations: ['price', 'inventory'] });
  }

  async findOne(id: number): Promise<ProductCatalogOrm> {
    return await this.repository.findOneBy({ id });
  }
}
