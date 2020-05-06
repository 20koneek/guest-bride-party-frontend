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
