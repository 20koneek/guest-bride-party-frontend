import { useQuery } from '@apollo/react-hooks'
import { productUnitQuery, productUnitsQuery } from '@api'
import {
  Query,
  QueryProductUnitArgs,
  QueryProductUnitsArgs,
} from '../../../../../../types/graphql.d'

export const useProductUnitsQuery = (id?: string) => (
  useQuery<Pick<Query, 'productUnits'>, QueryProductUnitsArgs>(
    productUnitsQuery, {
      variables: { id: id },
    },
  )
)

export const useProductUnitQuery = (id: string) => (
  useQuery<Pick<Query, 'productUnit'>, QueryProductUnitArgs>(
    productUnitQuery, {
      variables: { id: id },
    },
  )
)

// export const useCreateProductByBarcodeMutation = () => (
//   useMutation<Pick<Mutation, 'createProductByBarcode'>, MutationCreateProductByBarcodeArgs>(createProductByBarcodeMutation)
// )
