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
    ConditionsPage, UpdatePaymentPage,
} from '@features'

const NotFound: FC<RouteComponentProps> = () => <p>Sorry, nothing here</p>

export const BaseRouter: FC = () => (
    <Router>
        <NotFound default/>

        <GuestsPage path='guest'>
            <ContestsPage path='/'/>
            <ContestPage path='contests/:contestId'>
                <ConditionsPage path='conditions'/>
                <ConditionPage path='conditions/:conditionId'>
                    <NewPaymentPage path='payments/new'/>
                </ConditionPage>
            </ContestPage>

            <UpdatePaymentPage path='payments/:paymentId/edit'/>
        </GuestsPage>

        <NewGuestPage path='guest/:weddingId'/>
        <NotAuthPage path='guest/not-auth'/>

        <NewCardPage path='guest/card/new'/>
        <UpdateCardPage path='guest/card/update/:id'/>
    </Router>
)
