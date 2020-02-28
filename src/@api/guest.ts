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

export const createGuestMutation = gql`
  mutation CreateGuest($input: GuestInput!) {
    createGuest(input: $input) {
      name
    }
  }
`
