import { useMutation, useQuery } from '@apollo/client'
import {
    Mutation,
    MutationCreateGuestArgs,
    Query,
} from 'types/graphql.d'
import { createGuestMutation, currentGuestQuery } from '@api'

export const useCurrentGuestQuery = () => (
    useQuery<Pick<Query, 'currentGuest'>>(currentGuestQuery)
)

export const useCreateGuestMutation = () => (
    useMutation<Pick<Mutation, 'createGuest'>, MutationCreateGuestArgs>(createGuestMutation)
)
