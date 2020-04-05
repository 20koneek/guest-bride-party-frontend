import * as React from 'react'
import { hot } from 'react-hot-loader'
import { Theme } from '@ui'
import apolloClient from '@lib/apolloClient'
import { ApolloProvider } from '@apollo/client'
import { FirebaseProvider } from '@lib/firebaseContext'
import { BaseRouter } from './routes'

const App: React.FC = () => (
    <Theme>
        <ApolloProvider client={apolloClient}>
            <FirebaseProvider>
                <BaseRouter/>
            </FirebaseProvider>
        </ApolloProvider>
    </Theme>
)

export default hot(module)(App)
