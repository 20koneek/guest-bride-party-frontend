import React from 'react'
import { ProductEditPage, ProductPage, ProductsPage } from './pages'

export enum Routes {
  Index = '/',
  Show = '/:id',
  Edit = '/:id/edit',
}

export const productsRoutes = [
  <ProductsPage key={Routes.Index} path={Routes.Index}/>,
  <ProductPage key={Routes.Show} path={Routes.Show}/>,
  <ProductEditPage key={Routes.Edit} path={Routes.Edit}/>,
]
