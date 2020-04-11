import { useMutation } from '@apollo/client'
import { createPaymentMutation } from '@api'
import { Mutation, MutationCreatePaymentArgs } from '../../../types/graphql.d'

export const useCreatePaymentMutation = () => (
    useMutation<Pick<Mutation, 'createPayment'>, MutationCreatePaymentArgs>(createPaymentMutation)
)
