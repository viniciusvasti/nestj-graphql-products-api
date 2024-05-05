import { Test, TestingModule } from '@nestjs/testing';
import { ProductCatalogSqlResolver } from './product-catalog-sql.resolver';
import { ProductCatalogSqlService } from './product-catalog-sql.service';

describe('ProductCatalogSqlsResolver', () => {
  let resolver: ProductCatalogSqlResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductCatalogSqlResolver, ProductCatalogSqlService],
    }).compile();

    resolver = module.get<ProductCatalogSqlResolver>(ProductCatalogSqlResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
