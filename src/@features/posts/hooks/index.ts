import { useMutation } from '@apollo/client'
import { createPostMutation } from '@api'
import { Mutation, MutationCreatePostArgs } from '../../../types/graphql.d'

export const useCreatePostMutation = () => (
    useMutation<Pick<Mutation, 'createPost'>, MutationCreatePostArgs>(createPostMutation)
)
