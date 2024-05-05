import { InputType, Int, Field } from '@nestjs/graphql';

@InputType({
  description: 'A product in the catalog',
})
export class CreateProductDetailInput {
  @Field(() => Int, {
    description: 'The sku of the product',
    nullable: false,
  })
  sku: string
  @Field(() => String, {
    description: 'The name of the product',
    nullable: false,
  })
  name: string;
  @Field(() => String, {
    description: 'The description of the product',
    nullable: false,
  })
  description: string;
  @Field(() => Int, {
    description: 'The categoryId of the product',
    nullable: false,
  })
  categoryId: number;
}
