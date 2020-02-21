import React, { FC } from 'react'
import { navigate } from '@reach/router'
import { Layout } from '@ui/templates'
import { Props } from './types'
import { Routes } from '../../../authentication/routes'

export const RootPage: FC<Props> = ({ children, currentUser, auth }) => {
  setTimeout(async () => {
    if (!currentUser) {
      await navigate(Routes.SignIn)
    }
  }, 0)

  return (
    <Layout auth={auth} currentUser={currentUser}>
      {children}
    </Layout>
  )
}
