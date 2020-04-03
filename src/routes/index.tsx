import React, { FC } from 'react'
import { RouteComponentProps, Router } from '@reach/router'
import {
    GuestsPage,
    NotAuthPage,
    NewGuestPage,
    NewCardPage,
    UpdateCardPage,
    ContestPage,
    ContestsPage,
    ConditionPage,
    NewPaymentPage,
} from '@features'

const NotFound: FC<RouteComponentProps> = () => <p>Sorry, nothing here</p>

export const BaseRouter: FC = () => (
    <Router>
        <NotFound default/>

        <GuestsPage path='guest'>
            <ContestsPage path='/'/>
            <ContestPage path='contests/:id'/>
            <ConditionPage path='contests/:id/conditions/:id'>
                <NewPaymentPage path='payments/new'/>
            </ConditionPage>
        </GuestsPage>
        <NewGuestPage path='guest/:weddingId'/>
        <NotAuthPage path='guest/not-auth'/>

        <NewCardPage path='guest/card/new'/>
        <UpdateCardPage path='guest/card/update/:id'/>
    </Router>
)
