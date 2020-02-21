import * as React from 'react'
import { hot } from 'react-hot-loader'
import Theme from '@ui/atoms/Theme'
import apolloClient from '@lib/apolloClient'
import { ApolloProvider as ApolloHooksProvider } from '@apollo/react-hooks'
import { FirebaseProvider } from '@lib/firebaseContext'
import { Page } from '@ui/atoms/Page'
import { Routes } from './routes'

const App: React.FC = () => (
  <Theme>
    <ApolloHooksProvider client={apolloClient}>
      <FirebaseProvider>
        <Page>
          <Routes/>
        </Page>
      </FirebaseProvider>
    </ApolloHooksProvider>
  </Theme>
)

export default hot(module)(App)
