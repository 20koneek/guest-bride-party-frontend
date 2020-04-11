import { useMutation } from '@apollo/client'
import { Mutation, MutationUpdateCardArgs } from '../../../../../types/graphql.d'
import { addCardMutation, updateCardMutation } from '@api'

export const useAddCardMutation = () => (
    useMutation<Pick<Mutation, 'addCard'>>(addCardMutation)
)

export const useUpdateCardMutation = () => (
    useMutation<Pick<Mutation, 'updateCard'>, MutationUpdateCardArgs>(updateCardMutation)
)
