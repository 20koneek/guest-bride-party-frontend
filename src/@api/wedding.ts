import gql from 'graphql-tag'

export const currentWeddingQuery = gql`
    query CurrentWedding {
        currentWedding {
            id
            name
        }
    }
`

export const weddingQuery = gql`
    query Wedding($id: String!) {
        wedding(id: $id) {
            id
            name
        }
    }
`
