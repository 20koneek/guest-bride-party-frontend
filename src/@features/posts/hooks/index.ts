import { useMutation } from '@apollo/client'
import { createPaymentMutation, updatePaymentStatusMutation } from '@api'
import { Mutation, MutationCreatePaymentArgs, MutationUpdatePaymentStatusArgs } from '../../../types/graphql.d'

export const useCreatePaymentMutation = () => (
    useMutation<Pick<Mutation, 'createPayment'>, MutationCreatePaymentArgs>(createPaymentMutation)
)

export const useUpdatePaymentStatusMutation = () => (
    useMutation<Pick<Mutation, 'updatePaymentStatus'>, MutationUpdatePaymentStatusArgs>(updatePaymentStatusMutation)
)
