import gql from 'graphql-tag'

export const createGuestMutation = gql`
  mutation CreateGuest($input: GuestInput!) {
    createGuest(input: $input) {
      name
    }
  }
`
export const addCardMutation = gql`
  mutation AddCard {
    addCard
  }
`
