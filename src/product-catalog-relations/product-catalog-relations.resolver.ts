import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { ProductCatalogRelations } from './entities/product-catalog-relations.entity';
import { ProductCatalogRelationsService } from './product-catalog-relations.service';

@Resolver(() => ProductCatalogRelations)
export class ProductCatalogRelationsResolver {
  constructor(
    private readonly ProductCatalogRelationsService: ProductCatalogRelationsService,
  ) {}

  @Query(() => [ProductCatalogRelations], { name: 'productsCatalogRelations' })
  findAll() {
    return this.ProductCatalogRelationsService.findAll();
  }

  @Query(() => ProductCatalogRelations, { name: 'productCatalogRelations' })
  async findOne(@Args('id', { type: () => Int }) id: number) {
    return await this.ProductCatalogRelationsService.findOne(id);
  }
}
