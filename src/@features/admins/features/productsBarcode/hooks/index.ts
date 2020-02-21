import { useMutation, useQuery } from '@apollo/react-hooks'
import { createProductByBarcodeMutation, productsBarcodePaginateQuery } from '@api'
import {
  Mutation,
  MutationCreateProductByBarcodeArgs,
  Query,
  QueryProductsBarcodePaginateArgs,
} from '../../../../../../types/graphql.d'

export const useProductsBarcodePaginateQuery = (page: number, perPage: number) => (
  useQuery<Pick<Query, 'productsBarcodePaginate'>, QueryProductsBarcodePaginateArgs>(
    productsBarcodePaginateQuery, {
      variables: {
        page,
        perPage,
      },
      fetchPolicy: 'no-cache',
    },
  )
)

export const useCreateProductByBarcodeMutation = () => (
  useMutation<Pick<Mutation, 'createProductByBarcode'>, MutationCreateProductByBarcodeArgs>(createProductByBarcodeMutation)
)
