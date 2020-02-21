import ApolloClient from 'apollo-boost'
import apiUrl from '../apiUrl'
import { auth } from 'firebase/app'
import 'firebase/auth'

export default new ApolloClient({
  uri: apiUrl,
  request: async ({ setContext }) => {
    const token = await auth().currentUser?.getIdToken()

    if (token) {
      setContext({
        headers: { token },
      })
    }
  },
})


