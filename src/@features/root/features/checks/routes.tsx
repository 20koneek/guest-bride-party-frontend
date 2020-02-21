import React, { ReactElement } from 'react'
import { CheckPage, ChecksPage } from './pages'

export enum Routes {
  Index = '/',
  Show = '/:id',
}

export const checksRoutes: ReactElement[] = [
  <ChecksPage key={Routes.Index} path={Routes.Index}/>,
  <CheckPage key={Routes.Show} path={Routes.Show}/>,
]
