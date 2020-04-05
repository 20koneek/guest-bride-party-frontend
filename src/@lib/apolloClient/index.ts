import {
    InMemoryCache,
    ApolloClient,
    HttpLink,
    ApolloLink,
    concat,
} from '@apollo/client'
import uri from '../apiUrl'

const httpLink = new HttpLink({ uri })

const authMiddleware = new ApolloLink((operation, forward) => {
    const token = localStorage.getItem('token')

    operation.setContext({
        headers: {
            token,
        },
    })

    return forward(operation)
})

export default new ApolloClient({
    link: concat(authMiddleware, httpLink),
    cache: new InMemoryCache({}),
})
