import { Injectable } from '@nestjs/common';
import { CreateProductDetailInput } from './dto/create-product-detail.input';
import { UpdateProductDetailInput } from './dto/update-product-detail.input';
import { ProductDetail } from './entities/product-detail.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductDetailsService {
  constructor(
    @InjectRepository(ProductDetail)
    private repository: Repository<ProductDetail>,
  ) {}

  async create(
    createProductDetailInput: CreateProductDetailInput,
  ): Promise<ProductDetail> {
    return await this.repository.save(createProductDetailInput);
  }

  async findAll(): Promise<ProductDetail[]> {
    return await this.repository.find();
  }

  async findOne(id: number): Promise<ProductDetail> {
    return await this.repository.findOneBy({ id });
  }

  async update(
    updateProductDetailInput: UpdateProductDetailInput,
  ): Promise<ProductDetail> {
    const productDetail = await this.repository.findOneBy({
      id: updateProductDetailInput.id,
    });
    return await this.repository.save({
      ...productDetail,
      ...updateProductDetailInput,
    });
  }
}
