import gql from 'graphql-tag'

export const currentWeddingQuery = gql`
    query CurrentWedding {
        currentWedding {
            id
            title
        }
    }
`

export const weddingInfoQuery = gql`
    query WeddingInfo($id: String!) {
        weddingInfo(id: $id) {
            id
            title
        }
    }
`
