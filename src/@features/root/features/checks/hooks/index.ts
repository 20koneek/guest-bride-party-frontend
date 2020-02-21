import { useQuery } from '@apollo/react-hooks'
import { checksWithItemsQuery, checkWithItemsQuery } from '@api'
import { Query, QueryCheckArgs } from '../../../../../../types/graphql.d'

export const useChecksQuery = () => useQuery<Pick<Query, 'checksPaginate'>>(checksWithItemsQuery)

export const useCheckQuery = (id: string) => (
  useQuery<Pick<Query, 'check'>, QueryCheckArgs>(checkWithItemsQuery, { variables: { id } })
)
