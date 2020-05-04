import { useQuery } from '@apollo/client'
import { weddingQuery } from '@api'
import { Query } from '../../../types/graphql.d'

export const useWeddingQuery = ({ id }: { id: string }) => (
    useQuery<Pick<Query, 'wedding'>>(weddingQuery, { variables: { id } })
)
