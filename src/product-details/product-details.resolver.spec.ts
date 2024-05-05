import { Test, TestingModule } from '@nestjs/testing';
import { ProductDetailsResolver } from './product-details.resolver';
import { ProductDetailsService } from './product-details.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ProductDetail } from './entities/product-detail.entity';

const mockProducts: ProductDetail[] = [
  {
    id: 1,
    sku: '9998',
    name: 'Product 1',
    description: 'Description of product 1',
    categoryId: 1,
  },
  {
    id: 2,
    sku: '9999',
    name: 'Product 2',
    description: 'Description of product 2',
    categoryId: 2,
  },
  {
    id: 3,
    sku: '9997',
    name: 'Product 3',
    description: 'Description of product 3',
    categoryId: 3,
  },
];

const repositoryStub = {
  save: jest.fn((product: ProductDetail) =>
    Promise.resolve({ id: mockProducts.length + 1, ...product }),
  ),
  find: jest.fn(() => Promise.resolve(mockProducts)),
  findOneBy: jest.fn(({ id }: { id: number }) =>
    Promise.resolve(mockProducts.find((p) => p.id === id)),
  ),
};

describe('ProductDetailsResolver', () => {
  let resolver: ProductDetailsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductDetailsResolver,
        ProductDetailsService,
        {
          provide: getRepositoryToken(ProductDetail),
          useValue: repositoryStub,
        },
      ],
    }).compile();

    resolver = module.get<ProductDetailsResolver>(ProductDetailsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  it('should create a product detail', async () => {
    const created = await resolver.createProductDetail({
      sku: '9999',
      name: 'Product 1',
      description: 'Description of product 1',
      categoryId: 1,
    });

    expect(created).toEqual({
      id: 4,
      sku: '9999',
      name: 'Product 1',
      description: 'Description of product 1',
      categoryId: 1,
    });
    expect(repositoryStub.save).toHaveBeenCalledWith({
      sku: '9999',
      name: 'Product 1',
      description: 'Description of product 1',
      categoryId: 1,
    });
  });

  it('should return all product details', async () => {
    const products = await resolver.findAll();

    expect(products).toEqual(mockProducts);
    expect(repositoryStub.find).toHaveBeenCalled();
  });

  it('should return a single product detail', async () => {
    const product = await resolver.findOne(2);

    expect(product).toEqual(mockProducts[1]);
    expect(repositoryStub.findOneBy).toHaveBeenCalledWith({ id: 2 });
  });
});
