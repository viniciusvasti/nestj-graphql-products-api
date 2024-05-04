import { Test, TestingModule } from '@nestjs/testing';
import { ProductCatalogSqlService } from './product-catalog-sql.service';

describe('ProductCatalogSqlsService', () => {
  let service: ProductCatalogSqlService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductCatalogSqlService],
    }).compile();

    service = module.get<ProductCatalogSqlService>(ProductCatalogSqlService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
