import { Test, TestingModule } from '@nestjs/testing';
import { ProductCatalogOrmService } from './product-catalog-orm.service';

describe('ProductCatalogOrmsService', () => {
  let service: ProductCatalogOrmService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductCatalogOrmService],
    }).compile();

    service = module.get<ProductCatalogOrmService>(ProductCatalogOrmService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
