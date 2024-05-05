import * as dataloader from 'dataloader';
import { ProductCategory } from '../product-category/entities/product-category.entity';
import { ProductPrice } from 'src/product-price/entities/product-price.entity';
import { ProductInventory } from 'src/product-inventory/entities/product-inventory.entity';

export interface IDataLoader {
  categoryLoader: dataloader<number, ProductCategory>;
  inventoryLoader: dataloader<string, ProductInventory>;
  priceLoader: dataloader<string, ProductPrice>;
}
