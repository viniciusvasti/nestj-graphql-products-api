import { Test, TestingModule } from '@nestjs/testing';
import { ProductDetailsResolver } from './product-details.resolver';
import { ProductDetailsService } from './product-details.service';

describe('ProductDetailsResolver', () => {
  let resolver: ProductDetailsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductDetailsResolver, ProductDetailsService],
    }).compile();

    resolver = module.get<ProductDetailsResolver>(ProductDetailsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
