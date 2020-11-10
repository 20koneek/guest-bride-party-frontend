import {
    ApolloClient,
    ApolloLink,
    InMemoryCache,
    HttpLink,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import firebase from 'firebase/app'
import 'firebase/auth'
import env from '@lib/env'
import { appUrl } from '../apiUrl'

const httpLink = new HttpLink({ uri: appUrl })


const authLink = setContext(async (_, { headers = {} }) => ({
    headers: {
        ...headers,
        token: await firebase.auth().currentUser?.getIdToken()
    },
}))

export default new ApolloClient({
    link: ApolloLink.from([authLink, httpLink]),
    cache: new InMemoryCache(),
    connectToDevTools: env.isDevelopment,
})
