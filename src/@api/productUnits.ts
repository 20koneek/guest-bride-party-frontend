import gql from 'graphql-tag'

export const productUnitsQuery = gql`
  query ProductUnits($id: String){
    productUnits(id: $id) {
      id
      name
      parentProductUnitId
    }
  }
`
export const productUnitQuery = gql`
  query ProductUnit($id: String!){
    productUnit(id: $id) {
      id
      name
      parentProductUnitId
    }
  }
`

// export const updateProductMutation = gql`
//   mutation UpdateProduct($id: String!, $input: ProductInput!) {
//     updateProduct(id: $id, input: $input) {
//       id
//       name
//       status
//       netWeight
//     }
//   }
// `
