import { ApolloError } from 'apollo-client'

export interface Props extends UseStyle {
  loading: boolean
  error?: ApolloError
}
