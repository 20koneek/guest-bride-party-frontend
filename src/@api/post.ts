import gql from 'graphql-tag'

export const createPostMutation = gql`
    mutation CreatePost($input: PostInput!) {
        createPost(input: $input) {
            id
            message
        }
    }
`
