import React, { ReactElement } from 'react'
import { RoutePart } from '@ui'
import { AdminPage } from './pages'
import { productUnitsRoutes } from './features/productUnits'
import { retailersRoutes } from './features/retailers'
import { productsBarcodeRoutes } from './features/productsBarcode'
import { productsRoutes } from './features/products'

export enum Routes {
  Admins = '/admins',
  Products = '/products',
  ProductUnits = '/product-units',
  Retailers = '/retailers',
  ProductsBarcode = '/products-barcode',
}

export const adminRoutes: ReactElement[] = [
  <AdminPage key={Routes.Admins} path={Routes.Admins}>
    <RoutePart key={Routes.ProductUnits} path={Routes.ProductUnits}>
      {productUnitsRoutes}
    </RoutePart>
    <RoutePart key={Routes.Products} path={Routes.Products}>
      {productsRoutes}
    </RoutePart>
    <RoutePart key={Routes.Retailers} path={Routes.Retailers}>
      {retailersRoutes}
    </RoutePart>
    <RoutePart key={Routes.ProductsBarcode} path={Routes.ProductsBarcode}>
      {productsBarcodeRoutes}
    </RoutePart>
  </AdminPage>,
]
