import { Test, TestingModule } from '@nestjs/testing';
import { ProductCatalogFieldResolverResolver } from './product-catalog-fields-resolvers.resolver';

describe('ProductCatalogFieldResolversResolver', () => {
  let resolver: ProductCatalogFieldResolverResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductCatalogFieldResolverResolver],
    }).compile();

    resolver = module.get<ProductCatalogFieldResolverResolver>(
      ProductCatalogFieldResolverResolver,
    );
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
