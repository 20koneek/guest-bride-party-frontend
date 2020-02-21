import React from 'react'
import { ProductUnitsPage } from './pages'

export enum Routes {
  Index = '/',
  Show = '/:id',
  Edit = '/:id/edit',
}

export const productUnitsRoutes = [
  <ProductUnitsPage key={Routes.Index} path={Routes.Index}/>,
]
