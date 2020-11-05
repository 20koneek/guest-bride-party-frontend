import gql from 'graphql-tag'

export const currentContestQuery = gql`
    query CurrentContest($id: String!) {
        currentContest(id: $id) {
            id
            name
            conditions {
                id
                name
                color {
                    id
                    name
                    value
                }
            }
        }
    }
`

export const currentContestsQuery = gql`
    query CurrentContests {
        currentContests {
            id
            name
        }
    }
`
