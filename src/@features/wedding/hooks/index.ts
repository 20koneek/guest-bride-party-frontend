import { useQuery } from '@apollo/client'
import { Query } from '../../../types/graphql.d'
import { currentWeddingQuery } from '../../../@api'

export const useWeddingQuery = () => (
    useQuery<Pick<Query, 'currentWedding'>>(currentWeddingQuery)
)
