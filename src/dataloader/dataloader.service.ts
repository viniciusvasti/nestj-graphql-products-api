import { Injectable } from '@nestjs/common';
import * as DataLoader from 'dataloader';
import { ProductCategory } from '../product-category/entities/product-category.entity';
import { ProductCategoryService } from '../product-category/product-category.service';
import { ProductInventory } from '../product-inventory/entities/product-inventory.entity';
import { ProductPrice } from '../product-price/entities/product-price.entity';
import { IDataLoader } from './dataloader.interface';
import { ProductInventoryService } from '../product-inventory/product-inventory.service';
import { ProductPricesService } from '../product-price/product-price.service';

@Injectable()
export class DataloaderService {
  constructor(
    private readonly categoryService: ProductCategoryService,
    private readonly inventoryService: ProductInventoryService,
    private readonly priceService: ProductPricesService,
  ) {}

  getLoaders(): IDataLoader {
    const categoryLoader = this.createCategoryLoader();
    const inventoryLoader = this.createInventoryLoader();
    const priceLoader = this.createPriceLoader();
    return {
      categoryLoader,
      inventoryLoader,
      priceLoader,
    };
  }

  private createCategoryLoader() {
    return new DataLoader<number, ProductCategory>(
      async (keys: readonly number[]) => {
        return await this.categoryService.findAllByIds(keys as number[]);
      },
    );
  }

  private createInventoryLoader() {
    return new DataLoader<string, ProductInventory>(
      async (keys: readonly string[]) => {
        const result = await this.inventoryService.findAllBySkus(
          keys as string[],
        );
        return keys.map(
          (key) => result?.find((inv) => inv.sku === key) || null,
        );
      },
    );
  }

  private createPriceLoader() {
    return new DataLoader<string, ProductPrice>(
      async (keys: readonly string[]) => {
        const result = await this.priceService.findAllBySkus(keys as string[]);
        return keys.map(
          (key) => result?.find((inv) => inv.sku === key) || null,
        );
      },
    );
  }
}
