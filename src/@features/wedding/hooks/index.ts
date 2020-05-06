import { useQuery } from '@apollo/client'
import { currentWeddingQuery, weddingQuery } from '@api'
import { Query, QueryWeddingArgs } from '../../../types/graphql.d'

export const useWeddingQuery = ({ id }: { id: string }) => (
    useQuery<Pick<Query, 'wedding'>, QueryWeddingArgs>(weddingQuery, { variables: { id } })
)

export const useCurrentWeddingQuery = () => (
    useQuery<Pick<Query, 'currentWedding'>> (currentWeddingQuery)
)
