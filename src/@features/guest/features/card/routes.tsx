import React, { FC, Fragment } from 'react'
import { RouteComponentProps } from '@reach/router'
import { NewCardPage } from './pages'

export enum Routes {
    New = 'new',
    Update = ':id',
}

export const Router: FC<RouteComponentProps> = () => (
    <Fragment>
        <NewCardPage path={Routes.New}/>
    </Fragment>
)
// <UpdateCardPage path={Routes.UpdateCard}/>,
