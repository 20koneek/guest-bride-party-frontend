import React, { FC } from 'react'
import { Router } from '@reach/router'
import { adminRoutes } from '@features/admins'
import { authenticationRoutes } from '@features/authentication'
import { rootRoutes } from '../@features/root'
import { scannerRoutes } from '@features/root/features/scanner'

const routes: React.ReactElement[] = [
  ...rootRoutes,
  ...adminRoutes,
  ...authenticationRoutes,
  ...scannerRoutes,
]

export const Routes: FC = () => (
  <Router>
    {routes}
  </Router>
)
