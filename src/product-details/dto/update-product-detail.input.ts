import { CreateProductDetailInput } from './create-product-detail.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateProductDetailInput extends PartialType(
  CreateProductDetailInput,
) {
  @Field(() => Int)
  id: number;
}
