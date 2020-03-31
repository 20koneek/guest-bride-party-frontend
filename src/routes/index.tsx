import React, { FC } from 'react'
import { RouteComponentProps, Router } from '@reach/router'
import { GuestsPage, NotAuthPage, NewGuestPage, NewCardPage, UpdateCardPage } from '@features'

const NotFound: FC<RouteComponentProps> = () => <p>Sorry, nothing here</p>

export const BaseRouter: FC = () => (
    <Router>
        <NotFound default/>

        <GuestsPage path='guest'>

        </GuestsPage>
        <GuestsPage path='guest'/>
        <NewGuestPage path='guest/:weddingId'/>
        <NotAuthPage path='guest/not-auth'/>

        <NewCardPage path='guest/card/new'/>
        <UpdateCardPage path='guest/card/update/:id'/>
    </Router>
)
