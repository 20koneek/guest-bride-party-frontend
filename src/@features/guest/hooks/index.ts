import { useMutation } from '@apollo/react-hooks'
import {
    Mutation,
    MutationCreateGuestArgs,
} from '../../../../types/graphql.d'
import {  createGuestMutation } from '@api'

// export const useProductQuery = (id: string) => (
//   useQuery<Pick<Query, 'product'>, QueryRetailerArgs>(productQuery, { variables: { id } })
// )

export const useCreateGuestMutation = () => (
    useMutation<Pick<Mutation, 'createGuest'>, MutationCreateGuestArgs>(createGuestMutation)
)
