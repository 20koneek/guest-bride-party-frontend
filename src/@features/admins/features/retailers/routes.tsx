import React, { ReactElement } from 'react'
import { RetailerPage, RetailersPage } from './pages'

export enum Routes {
  Index = '/',
  Show = '/:id',
}

export const retailersRoutes: ReactElement[] = [
  <RetailersPage key={Routes.Index} path={Routes.Index}/>,
  <RetailerPage key={Routes.Show} path={Routes.Show}/>,
]

