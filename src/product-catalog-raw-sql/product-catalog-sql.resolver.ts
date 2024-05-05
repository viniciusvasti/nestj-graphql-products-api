import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { ProductCatalogSql } from './dto/product-catalog-sql.output';
import { ProductCatalogSqlService } from './product-catalog-sql.service';

@Resolver(() => ProductCatalogSql)
export class ProductCatalogSqlResolver {
  constructor(
    private readonly ProductCatalogSqlService: ProductCatalogSqlService,
  ) {}

  @Query(() => [ProductCatalogSql], { name: 'productsCatalogsSql' })
  findAll() {
    return this.ProductCatalogSqlService.findAll();
  }

  @Query(() => ProductCatalogSql, { name: 'productCatalogSql' })
  async findOne(@Args('id', { type: () => Int }) id: number) {
    return await this.ProductCatalogSqlService.findOne(id);
  }
}
