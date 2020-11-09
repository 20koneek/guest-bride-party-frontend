import gql from 'graphql-tag'

export const guestFragment = gql`
    fragment GuestFragment on Guest{
        id
        name
        card {
            id
            status
        }
    }
`

export const currentGuestQuery = gql`
    ${guestFragment}
    query CurrentGuest {
        currentGuest {
            ...GuestFragment
        }
    }
`

export const createGuestMutation = gql`
    ${guestFragment}
    mutation CreateGuest($input: GuestInput!) {
        createGuest(input: $input) {
            ...GuestFragment
        }
    }
`
