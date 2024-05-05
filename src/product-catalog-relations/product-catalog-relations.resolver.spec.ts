import { Test, TestingModule } from '@nestjs/testing';
import { ProductCatalogRelationsResolver } from './product-catalog-relations.resolver';
import { ProductCatalogRelationsService } from './product-catalog-relations.service';

describe('ProductCatalogRelationssResolver', () => {
  let resolver: ProductCatalogRelationsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductCatalogRelationsResolver, ProductCatalogRelationsService],
    }).compile();

    resolver = module.get<ProductCatalogRelationsResolver>(ProductCatalogRelationsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
