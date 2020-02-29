import { useMutation } from '@apollo/react-hooks'
import {
    Mutation,
    MutationCreateGuestArgs,
} from '../../../../types/graphql.d'
import { addCardMutation, createGuestMutation } from '@api'

export const useCreateGuestMutation = () => (
    useMutation<Pick<Mutation, 'createGuest'>, MutationCreateGuestArgs>(createGuestMutation)
)

export const useAddCardMutation = () => (
    useMutation<Pick<Mutation, 'addCard'>, MutationCreateGuestArgs>(addCardMutation)
)
