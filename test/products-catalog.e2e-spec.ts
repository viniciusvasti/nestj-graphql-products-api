import { INestApplication } from '@nestjs/common';
import { GraphQLSchemaHost } from '@nestjs/graphql';
import { Test } from '@nestjs/testing';
import { GraphQLSchema, graphql } from 'graphql';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { ProductCatalogFieldResolver } from '../src/product-catalog-fields-resolvers/dto/product-catalog-fields-resolvers.output';

describe('E2E Tests', () => {
  let app: INestApplication;
  let schema: GraphQLSchema;
  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    app = moduleFixture.createNestApplication();
    await app.init();
    schema = app.get(GraphQLSchemaHost).schema;
  });

  afterAll(async () => {
    await app.close();
  });

  it('should fetch all product catalog', async () => {
    return request(app.getHttpServer())
      .post('/graphql')
      .send({
        query: `{
          productsCatalogFieldResolver {
            id
            sku
            name
            description
            inventory {
                stockUnits
            }
            price {
                price
            }
          }
        }`,
      })
      .expect(200)
      .expect(({ body }) => {
        expect(body.data.productsCatalogFieldResolver).toBeDefined();
        expect(body.data.productsCatalogFieldResolver).toBeInstanceOf(Array);
        expect(
          body.data.productsCatalogFieldResolver.find(
            (p) => p.sku === '00000013',
          ),
        ).toEqual({
          id: expect.any(Number),
          sku: expect.any(String),
          name: expect.any(String),
          description: expect.any(String),
          inventory: {
            stockUnits: expect.any(Number),
          },
          price: {
            price: expect.any(Number),
          },
        });
      });

    // const result = await graphql({
    //   schema,
    //   source: `{
    //       productsCatalogFieldResolver {
    //         id
    //         sku
    //         name
    //         description
    //         inventory {
    //             stockUnits
    //         }
    //         price {
    //             price
    //         }
    //       }
    //     }`,
    // });
    // expect(result.data.productsCatalogFieldResolver).toBeDefined();
    // expect(result.data.productsCatalogFieldResolver).toBeInstanceOf(Array);
    // expect(
    //   (
    //     result.data
    //       .productsCatalogFieldResolver as ProductCatalogFieldResolver[]
    //   ).find((p) => p.sku === '00000013'),
    // ).toEqual({
    //   id: expect.any(Number),
    //   sku: expect.any(String),
    //   name: expect.any(String),
    //   description: expect.any(String),
    //   //   inventory: {
    //   //     stockUnits: expect.any(Number),
    //   //   },
    //   //   price: {
    //   //     price: expect.any(Number),
    //   //   },
    // });
  });
});
