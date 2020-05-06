import gql from 'graphql-tag'

export const createPaymentMutation = gql`
    mutation CreatePayment($input: PaymentInput!) {
        createPayment(input: $input)
    }
`

export const updatePaymentStatusMutation = gql`
    mutation UpdatePaymentStatus($id: String!, $status: PaymentStatus!) {
        updatePaymentStatus(id: $id, status: $status) {
            id
            name
            card {
                id
                status
            }
        }
    }
`
