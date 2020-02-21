import React from 'react'
import { navigate } from '@reach/router'
import { WithUserRoute } from './types'
import { Routes } from '../../@features/authentication/routes'

export const withUserRoute: WithUserRoute = (Component) => (props) => {
  setTimeout(async () => {
    if (!props.currentUser) {
      await navigate(Routes.SignIn)
    }
  }, 0)

  return (
    <Component
      {...props}
    />
  )
}
