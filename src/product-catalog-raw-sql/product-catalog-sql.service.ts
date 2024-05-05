import { Injectable } from '@nestjs/common';
import { ProductCatalogSql } from './dto/product-catalog-sql.output';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductCatalogSqlService {
  constructor(
    @InjectRepository(ProductCatalogSql)
    private repository: Repository<ProductCatalogSql>,
  ) {}

  async findAll(): Promise<ProductCatalogSql[]> {
    const result = await this.repository.query(`
    SELECT pd.id, pd.sku, name, description, price, stockUnits, category_id
    FROM product_details pd
    LEFT JOIN product_price pp ON pd.sku = pp.sku
    LEFT JOIN product_inventory pi ON pd.sku = pi.sku;
`);
    return result.map((product) => {
      return {
        ...product,
        stockUnits: product.stockunits,
        categoryId: product.category_id,
      } as ProductCatalogSql;
    });
  }

  async findOne(id: number): Promise<ProductCatalogSql> {
    const [result] = await this.repository.query(
      `
        SELECT pd.id, pd.sku, name, description, price, stockUnits, category_id
        FROM product_details pd
        LEFT JOIN product_price pp ON pd.sku = pp.sku
        LEFT JOIN product_inventory pi ON pd.sku = pi.sku
        WHERE pd.id = $1
    `,
      [id],
    );
    return {
      ...result,
      stockUnits: result.stockunits,
      categoryId: result.category_id,
    } as ProductCatalogSql;
  }
}
