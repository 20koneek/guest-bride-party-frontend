import gql from 'graphql-tag'

export const currentGuestQuery = gql`
    query CurrentGuest {
        currentGuest {
            id
            name
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

export const addCardMutation = gql`
  mutation AddCard {
    addCard
  }
`
