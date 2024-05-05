import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { ProductCatalogOrm } from './entities/product-catalog-orm.entity';
import { ProductCatalogOrmService } from './product-catalog-orm.service';

@Resolver(() => ProductCatalogOrm)
export class ProductCatalogOrmResolver {
  constructor(
    private readonly ProductCatalogOrmService: ProductCatalogOrmService,
  ) {}

  @Query(() => [ProductCatalogOrm], { name: 'ProductCatalogsOrm' })
  findAll() {
    return this.ProductCatalogOrmService.findAll();
  }

  @Query(() => ProductCatalogOrm, { name: 'ProductCatalogOrm' })
  async findOne(@Args('id', { type: () => Int }) id: number) {
    return await this.ProductCatalogOrmService.findOne(id);
  }
}
