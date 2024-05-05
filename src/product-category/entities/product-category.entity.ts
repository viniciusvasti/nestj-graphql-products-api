import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@ObjectType()
@Entity({
  name: 'productcategory',
})
export class ProductCategory {
  @Field(() => Int)
  @PrimaryColumn()
  id: number;

  @Field(() => String, {
    nullable: false,
  })
  @Column()
  name: string;
}
