import gql from 'graphql-tag'

export const currentGuestQuery = gql`
    query CurrentGuest {
        currentGuest {
            id
            name
            cardStatus
        }
    }
`

export const createGuestMutation = gql`
    mutation CreateGuest($input: GuestInput!) {
        createGuest(input: $input) {
            id
            name
            cardStatus
        }
    }
`

export const addCardMutation = gql`
  mutation AddCard {
    addCard
  }
`

export const updateCardMutation = gql`
    mutation UpdateCard($id: String!, $status: CardStatus!) {
        updateCard(id: $id, status: $status) {
            id
            name
            cardStatus
        }
    }
`
