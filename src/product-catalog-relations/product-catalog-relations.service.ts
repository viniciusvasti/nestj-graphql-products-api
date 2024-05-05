import { Injectable } from '@nestjs/common';
import { ProductCatalogRelations } from './entities/product-catalog-relations.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductCatalogRelationsService {
  constructor(
    @InjectRepository(ProductCatalogRelations)
    private repository: Repository<ProductCatalogRelations>,
  ) {}

  async findAll(): Promise<ProductCatalogRelations[]> {
    return await this.repository.find({
      relations: ['price', 'inventory', 'category'],
    });
  }

  async findOne(id: number): Promise<ProductCatalogRelations> {
    return await this.repository.findOne({
      where: { id: id },
      relations: ['price', 'inventory', 'category'],
    });
  }
}
