import React, { FC } from 'react'
import { RouteComponentProps, Router } from '@reach/router'
import { GuestsPage, NotAuthPage, NewGuestPage, NewCardPage, UpdateCardPage } from '@features'
import { Contests } from '../@features/guest/features/contest/pages/Contests'

const NotFound: FC<RouteComponentProps> = () => <p>Sorry, nothing here</p>

export const BaseRouter: FC = () => (
    <Router>
        <NotFound default/>

        <GuestsPage path='guest'>
            <Contests path='/'/>
        </GuestsPage>
        <NewGuestPage path='guest/:weddingId'/>
        <NotAuthPage path='guest/not-auth'/>

        <NewCardPage path='guest/card/new'/>
        <UpdateCardPage path='guest/card/update/:id'/>
    </Router>
)
