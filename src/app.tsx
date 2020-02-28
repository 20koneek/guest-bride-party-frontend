import * as React from 'react'
import { hot } from 'react-hot-loader'
import { Theme } from '@ui'
import apolloClient from '@lib/apolloClient'
import { ApolloProvider as ApolloHooksProvider } from '@apollo/react-hooks'
import { FirebaseProvider } from '@lib/firebaseContext'
import { Routes } from './routes'

const App: React.FC = () => (
    <Theme>
        <ApolloHooksProvider client={apolloClient}>
            <FirebaseProvider>
                <Routes/>
            </FirebaseProvider>
        </ApolloHooksProvider>
    </Theme>
)

export default hot(module)(App)
