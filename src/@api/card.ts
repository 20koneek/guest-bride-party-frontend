import gql from 'graphql-tag'
import { guestFragment } from '@api/guest'

export const addCardMutation = gql`
    mutation AddCard {
        addCard
    }
`

export const skipCardMutation = gql`
    ${guestFragment}
    mutation skipCard {
        skipCard {
            ...GuestFragment
        }
    }
`
