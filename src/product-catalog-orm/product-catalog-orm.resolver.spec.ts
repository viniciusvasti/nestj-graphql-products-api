import { Test, TestingModule } from '@nestjs/testing';
import { ProductCatalogOrmResolver } from './product-catalog-orm.resolver';
import { ProductCatalogOrmService } from './product-catalog-orm.service';

describe('ProductCatalogOrmsResolver', () => {
  let resolver: ProductCatalogOrmResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductCatalogOrmResolver, ProductCatalogOrmService],
    }).compile();

    resolver = module.get<ProductCatalogOrmResolver>(ProductCatalogOrmResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
