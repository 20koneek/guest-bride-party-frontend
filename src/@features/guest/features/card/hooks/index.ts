import { useMutation } from '@apollo/client'
import { Mutation, MutationUpdatePaymentStatusArgs } from '../../../../../types/graphql.d'
import { addCardMutation, updatePaymentStatusMutation } from '@api'

export const useAddCardMutation = () => (
    useMutation<Pick<Mutation, 'addCard'>>(addCardMutation)
)

export const useUpdateCardMutation = () => (
    useMutation<Pick<Mutation, 'updatePaymentStatus'>, MutationUpdatePaymentStatusArgs>(updatePaymentStatusMutation)
)
