import { useMutation } from '@apollo/client'
import { Mutation } from '../../../../../types/graphql.d'
import { addCardMutation, updateCardMutation } from '@api'

export const useAddCardMutation = () => (
    useMutation<Pick<Mutation, 'addCard'>>(addCardMutation)
)

export const useUpdateCardMutation = () => (
    // @ts-ignore
    useMutation<Pick<Mutation, 'updateCard'>, MutationUpdateCardArgs>(updateCardMutation)
)
