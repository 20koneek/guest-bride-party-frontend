import React from 'react'
import { WithUserRoute } from './types'

export const withUserRoute: WithUserRoute = (Component) => (props) => {
  return (
    <Component
      {...props}
    />
  )
}
