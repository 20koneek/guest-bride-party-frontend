import gql from 'graphql-tag'

export const productQuery = gql`
  query Product($id: String!){
    product(id: $id) {
      id
      name
      status
      netWeight
    }
  }
`

export const updateProductMutation = gql`
  mutation UpdateProduct($id: String!, $input: ProductInput!) {
    updateProduct(id: $id, input: $input) {
      id
      name
      status
      netWeight
    }
  }
`
