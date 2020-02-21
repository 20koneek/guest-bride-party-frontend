import gql from 'graphql-tag'

export const productsBarcodePaginateQuery = gql`
  query ProductsBarcodePaginate($perPage: Int!, $page: Int!){
    productsBarcodePaginate(perPage: $perPage, page: $page) {
      productsBarcode {
        id
        name
        barcode
        productId
      }
      pageInfo {
        page
        perPage
        totalCount
      }
    }
  }
`

export const productByBarcodeMutation = gql`
  mutation ProductByBarcode($barcode: String!){
    productByBarcode(barcode: $barcode) {
      id
      name
    }
  }
`

export const createProductByBarcodeMutation = gql`
  mutation CreateProductByBarcodeMutation($id: String!){
    createProductByBarcode(id: $id) {
      id
      name
    }
  }
`
