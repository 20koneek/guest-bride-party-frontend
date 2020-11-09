import { useQuery } from '@apollo/client'
import { currentWeddingQuery, weddingInfoQuery } from '@api'
import { Query, QueryWeddingInfoArgs } from 'types/graphql.d'

export const useWeddingQuery = ({ id }: { id: string }) => (
    useQuery<Pick<Query, 'weddingInfo'>, QueryWeddingInfoArgs>(weddingInfoQuery, { variables: { id } })
)

export const useCurrentWeddingQuery = () => (
    useQuery<Pick<Query, 'currentWedding'>>(currentWeddingQuery)
)
