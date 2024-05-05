import { Test, TestingModule } from '@nestjs/testing';
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

describe('ProductDetailsService', () => {
  let service: ProductDetailsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductDetailsService,
        {
          provide: getRepositoryToken(ProductDetail),
          useValue: {
            save: jest.fn(() => Promise.resolve({ id: 1 })),
            find: jest.fn(() => Promise.resolve(mockProducts)),
            findOneBy: jest.fn(({ id }: { id: number }) =>
              Promise.resolve(mockProducts.find((p) => p.id === id)),
            ),
          },
        },
      ],
    }).compile();

    service = module.get<ProductDetailsService>(ProductDetailsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a product detail', async () => {
    const productDetail = await service.create({
      sku: '9999',
      name: 'Product 1',
      description: 'Description of product 1',
      categoryId: 1,
    });
    expect(productDetail).toHaveProperty('id');
  });

  it('should find all product details', async () => {
    const productDetails = await service.findAll();
    expect(productDetails).toEqual(mockProducts);
  });

  it('should find a product detail', async () => {
    const productDetail = await service.findOne(2);
    expect(productDetail).toEqual(mockProducts[1]);
  });
});
