import gql from 'graphql-tag'

export const retailersQuery = gql`
  query Retailers {
    retailers {
      id
      inn
      name
    }
  }
`

export const retailerQuery = gql`
  query Retailer($id: String!) {
    retailer(id: $id) {
      id
      inn
      name
    }
  }
`
