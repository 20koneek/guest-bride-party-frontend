import { useMutation } from '@apollo/react-hooks'
import { createCheckMutation, productByBarcodeMutation } from '@api'
import { Mutation, MutationCreateCheckArgs, MutationProductByBarcodeArgs } from '../../../../../../types/graphql.d'

export const useCreateCheckMutation = () => (
  useMutation<Pick<Mutation, 'createCheck'>, MutationCreateCheckArgs>(createCheckMutation)
)

export const useProductByBarcodeMutation = () => (
  useMutation<Pick<Mutation, 'productByBarcode'>, MutationProductByBarcodeArgs>(productByBarcodeMutation, {})
)
