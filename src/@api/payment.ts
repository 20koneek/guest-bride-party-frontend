import gql from 'graphql-tag'

export const createPaymentMutation = gql`
    mutation CreatePayment($input: PaymentInput!) {
        createPayment(input: $input) {
            id
            amount
            status
        }
    }
`
