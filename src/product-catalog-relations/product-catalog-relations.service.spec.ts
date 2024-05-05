import { Test, TestingModule } from '@nestjs/testing';
import { ProductCatalogRelationsService } from './product-catalog-relations.service';

describe('ProductCatalogRelationssService', () => {
  let service: ProductCatalogRelationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductCatalogRelationsService],
    }).compile();

    service = module.get<ProductCatalogRelationsService>(ProductCatalogRelationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
