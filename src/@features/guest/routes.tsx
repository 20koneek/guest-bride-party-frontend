import React from 'react'
import { GuestsPage, NewGuestPage, NotAuthPage } from './pages'
import { cartsRoutes } from './features/card'

export enum Routes {
    Index = 'guest',
    New = 'guest/:weddingId',
    NotAuth = 'guest/not-auth'
}

export const routes = [
    <GuestsPage key={Routes.Index} path={Routes.Index}>
        {cartsRoutes}
    </GuestsPage>,
    <NewGuestPage key={Routes.New} path={Routes.New}/>,
    <NotAuthPage key={Routes.NotAuth} path={Routes.NotAuth}/>,
]
