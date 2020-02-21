import React from 'react'
import { Layout } from '@ui'
import { Props } from './types'

export const Admin: React.FC<Props> = ({ children, currentUser, auth }) => (
  <Layout
    auth={auth}
    currentUser={currentUser}
  >
    {children}
  </Layout>
)
