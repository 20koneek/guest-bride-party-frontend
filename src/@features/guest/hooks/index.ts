import { useMutation, useQuery } from '@apollo/react-hooks'
import {
    Mutation,
    MutationCreateGuestArgs, MutationUpdateCardArgs, Query,
} from '../../../types/graphql.d'
import { addCardMutation, createGuestMutation, currentGuestQuery, updateCardMutation } from '@api'

export const useCurrentGuestQuery = () => (
    useQuery<Pick<Query, 'currentGuest'>>(currentGuestQuery)
)

export const useCreateGuestMutation = () => (
    useMutation<Pick<Mutation, 'createGuest'>, MutationCreateGuestArgs>(createGuestMutation)
)

export const useAddCardMutation = () => (
    useMutation<Pick<Mutation, 'addCard'>>(addCardMutation)
)

export const useUpdateCardMutation = () => (
    useMutation<Pick<Mutation, 'updateCard'>, MutationUpdateCardArgs>(updateCardMutation)
)
