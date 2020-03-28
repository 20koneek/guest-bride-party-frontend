import React, { FC, Fragment } from 'react'
import { GuestsPage, NewGuestPage, NotAuthPage } from './pages'
// import { cartsRoutes } from './features/card'
import { RouteComponentProps } from '@reach/router'

export enum Routes {
    Index = '/',
    New = ':weddingId',
    NotAuth = 'not-auth'
}

export const Router: FC<RouteComponentProps> = () => (
    <Fragment>
        <GuestsPage path={Routes.Index}>

        </GuestsPage>
        <NewGuestPage path={Routes.New}/>
        <NotAuthPage path={Routes.NotAuth}/>
    </Fragment>
)
