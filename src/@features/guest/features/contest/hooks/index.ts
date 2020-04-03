import { useQuery } from '@apollo/react-hooks'
import { Query } from '../../../../../types/graphql.d'
import { currentContestQuery, currentWeddingQuery } from '@api'

export const useWeddingQuery = () => (
    useQuery<Pick<Query, 'currentWedding'>>(currentWeddingQuery)
)

export const useContestQuery = (id: string) => (
    useQuery<Pick<Query, 'currentContest'>>(currentContestQuery, { variables: { id } })
)
