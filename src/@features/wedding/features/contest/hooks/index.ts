import { useQuery } from '@apollo/client'
import { Query } from '../../../../../types/graphql.d'
import { currentContestQuery } from '@api'

export const useContestQuery = (id: string) => (
    useQuery<Pick<Query, 'currentContest'>>(currentContestQuery, { variables: { id } })
)
