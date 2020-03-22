import { useMutation, useQuery } from '@apollo/react-hooks'
import {
    Mutation,
    MutationCreateGuestArgs, Query,
} from '../../../types/graphql.d'
import { addCardMutation, createGuestMutation, currentGuestQuery, skipCardMutation } from '@api'

export const useCurrentGuestQuery = () => (
    useQuery<Pick<Query, 'currentGuest'>>(currentGuestQuery)
)

export const useCreateGuestMutation = () => (
    useMutation<Pick<Mutation, 'createGuest'>, MutationCreateGuestArgs>(createGuestMutation)
)

export const useAddCardMutation = () => (
    useMutation<Pick<Mutation, 'addCard'>, MutationCreateGuestArgs>(addCardMutation)
)

export const useSkipCardMutation = () => (
    useMutation<Pick<Mutation, 'skipCard'>, MutationCreateGuestArgs>(skipCardMutation)
)
