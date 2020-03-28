import React from 'react'
import { ContestsPage } from './pages'

export enum Routes {
    Index = '/',
}

export const routes = [
    <ContestsPage key={Routes.Index} path={Routes.Index}/>,
]
