import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProductDetailsService } from './product-details.service';
import { ProductDetail } from './entities/product-detail.entity';
import { CreateProductDetailInput } from './dto/create-product-detail.input';
import { UpdateProductDetailInput } from './dto/update-product-detail.input';

@Resolver(() => ProductDetail)
export class ProductDetailsResolver {
  constructor(private readonly productDetailsService: ProductDetailsService) {}

  @Mutation(() => ProductDetail)
  createProductDetail(
    @Args('createProductDetailInput')
    createProductDetailInput: CreateProductDetailInput,
  ) {
    return this.productDetailsService.create(createProductDetailInput);
  }

  @Query(() => [ProductDetail], { name: 'productDetails' })
  findAll() {
    return this.productDetailsService.findAll();
  }

  @Query(() => ProductDetail, { name: 'productDetail' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.productDetailsService.findOne(id);
  }

  @Mutation(() => ProductDetail)
  updateProductDetail(
    @Args('updateProductDetailInput')
    updateProductDetailInput: UpdateProductDetailInput,
  ) {
    return this.productDetailsService.update(updateProductDetailInput);
  }
}
