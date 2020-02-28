import React from 'react'
import { NewGuestPage } from './pages'

export enum Routes {
  // New = 'guest/new',
  New = '/',
}

export const routes = [
  <NewGuestPage key={Routes.New} path={Routes.New}/>,
]
