import {
    Args,
    Context,
    Int,
    Parent,
    Query,
    ResolveField,
    Resolver,
} from '@nestjs/graphql';
import { IDataLoader } from '../dataloader/dataloader.interface';
import { ProductDetailsService } from '../product-details/product-details.service';
import { ProductCatalogFieldResolver } from './dto/product-catalog-fields-resolvers.output';

@Resolver(() => ProductCatalogFieldResolver)
export class ProductCatalogFieldResolverResolver {
  constructor(
    private readonly productDetailsService: ProductDetailsService,
  ) {}

  @Query(() => [ProductCatalogFieldResolver], {
    name: 'productsCatalogFieldResolver',
  })
  findAll() {
    return this.productDetailsService.findAll();
  }

  @Query(() => ProductCatalogFieldResolver, {
    name: 'productCatalogFieldResolver',
  })
  async findOne(@Args('id', { type: () => Int }) id: number) {
    return await this.productDetailsService.findOne(id);
  }

  @ResolveField()
  async category(
    @Parent() productCatalogFieldResolver: ProductCatalogFieldResolver,
    @Context() { loaders }: { loaders: IDataLoader },
  ) {
    const { categoryId } = productCatalogFieldResolver;
    return loaders.categoryLoader.load(categoryId);
  }

  @ResolveField()
  async price(
    @Parent() productCatalogFieldResolver: ProductCatalogFieldResolver,
    @Context() { loaders }: { loaders: IDataLoader },
  ) {
    const { sku } = productCatalogFieldResolver;
    return loaders.priceLoader.load(sku);
  }

  @ResolveField()
  async inventory(
    @Parent() productCatalogFieldResolver: ProductCatalogFieldResolver,
    @Context() { loaders }: { loaders: IDataLoader },
  ) {
    const { sku } = productCatalogFieldResolver;
    return loaders.inventoryLoader.load(sku);
  }
}
