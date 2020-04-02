import gql from 'graphql-tag'

export const currentWeddingQuery = gql`
    query CurrentWedding {
        currentWedding {
            id
            name
            contests {
                id
                name
                conditions {
                    id
                    name
                }
            }
        }
    }
`

