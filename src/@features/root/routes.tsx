import React, { ReactElement } from 'react'
import { RootPage } from './pages'
import { RoutePart } from '../../@ui/atoms'
import { scannerRoutes } from './features/scanner'
import { checksRoutes } from './features/checks'

export enum Routes {
  Root = '/',
  Scanner = '/scanner',
  Checks='/checks'
}

export const rootRoutes: ReactElement[] = [
  <RootPage key={Routes.Root} path={Routes.Root}>
    <RoutePart path={Routes.Scanner}>{scannerRoutes}</RoutePart>
    <RoutePart path={Routes.Checks}>{checksRoutes}</RoutePart>
  </RootPage>,
]
