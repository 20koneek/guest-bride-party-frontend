import * as React from 'react'
import { Theme } from '@ui'
import apolloClient from '@lib/apolloClient'
import { ApolloProvider } from '@apollo/client'
import { FirebaseProvider } from '@lib/firebaseContext'
import { BaseRouter } from './routes'

export const App: React.FC = () => (
    <Theme>
        <ApolloProvider client={apolloClient}>
            <FirebaseProvider>
                <BaseRouter/>
            </FirebaseProvider>
        </ApolloProvider>
    </Theme>
)
