import gql from 'graphql-tag'

export const GET_PRODUCT_UNITS = gql`
  query GetProductUnits {
    productUnits {
      id
    }
  }
`
