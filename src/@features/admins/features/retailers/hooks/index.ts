import { useQuery } from '@apollo/react-hooks'
import { retailerQuery, retailersQuery } from '@api'
import { Query, QueryRetailerArgs } from '../../../../../../types/graphql.d'

export const useRetailersQuery = () => useQuery<Pick<Query, 'retailers'>>(retailersQuery)

export const useRetailerQuery = (id: string) => (
  useQuery<Pick<Query, 'retailer'>, QueryRetailerArgs>(retailerQuery, { variables: { id } })
)
