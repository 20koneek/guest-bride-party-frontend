import React, { FC } from 'react'
import { Router } from '@reach/router'
import { guestRoutes } from '@features/guest'

const routes: React.ReactElement[] = [
  ...guestRoutes,
]

export const Routes: FC = () => (
  <Router>
    {routes}
  </Router>
)
