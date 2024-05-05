import {
  Args,
  Context,
  Int,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { ProductCategoryService } from 'src/product-category/product-category.service';
import { ProductDetailsService } from 'src/product-details/product-details.service';
import { ProductInventoryService } from 'src/product-inventory/product-inventory.service';
import { ProductPricesService } from 'src/product-price/product-price.service';
import { ProductCatalogFieldResolver } from './dto/product-catalog-fields-resolvers.output';
import { IDataLoader } from 'src/dataloader/dataloader.interface';

@Resolver(() => ProductCatalogFieldResolver)
export class ProductCatalogFieldResolverResolver {
  constructor(
    private readonly productDetailsService: ProductDetailsService,
    private readonly productPriceService: ProductPricesService,
    private readonly productInventoryService: ProductInventoryService,
    private readonly productCategoryService: ProductCategoryService,
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
    return loaders.priceLoader.load(sku);
  }
}
