import { useMutation, useQuery } from '@apollo/react-hooks'
import {
  Mutation,
  MutationUpdateProductArgs,
  Query,
  QueryRetailerArgs,
} from '../../../../../../types/graphql.d'
import { productQuery, updateProductMutation } from '@api'

export const useProductQuery = (id: string) => (
  useQuery<Pick<Query, 'product'>, QueryRetailerArgs>(productQuery, { variables: { id } })
)

export const useUpdateProductMutation = () => (
  useMutation<Pick<Mutation, 'updateProduct'>, MutationUpdateProductArgs>(updateProductMutation)
)
