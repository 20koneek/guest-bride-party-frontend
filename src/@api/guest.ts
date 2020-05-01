import gql from 'graphql-tag'

export const currentGuestQuery = gql`
    query CurrentGuest {
        currentGuest {
            id
            name
            card {
                id
                status
            }
        }
    }
`

export const createGuestMutation = gql`
    mutation CreateGuest($input: GuestInput!) {
        createGuest(input: $input) {
            id
            name
            card {
                id
                status
            }
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
            card {
                id
                status
            }
        }
    }
`
