import { useQuery } from '@apollo/client'
import { Query } from '../../../types/graphql.d'
import { currentContestQuery, currentContestsQuery } from '@api'

export const useContestQuery = (id: string) => (
    useQuery<Pick<Query, 'currentContest'>>(currentContestQuery, { variables: { id } })
)

export const useContestsQuery = () => (
    useQuery<Pick<Query, 'currentContests'>>(currentContestsQuery)
)
