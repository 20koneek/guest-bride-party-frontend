import React, { FC } from 'react'
import { RouteComponentProps, Router } from '@reach/router'
import {
    ConditionPage,
    ConditionsPage,
    ContestPage,
    ContestsPage,
    CurrentWeddingPage,
    NewCardPage,
    NewGuestPage,
    NewPaymentPage,
    NewPostPage,
    NotAuthPage,
    UpdateCardPage,
    UpdatePaymentPage,
    WeddingPage,
} from '@features'
import { PartRoute } from './PartRoute'

const NotFound: FC<RouteComponentProps> = () => <p>Sorry, nothing here</p>

export const BaseRouter: FC = () => (
    <Router>
        <CurrentWeddingPage path='wedding'>
            <ContestsPage path='/'/>

            <ContestPage path='contests/:contestId'>
                <PartRoute path='conditions'>
                    <ConditionsPage path='/'/>

                    <ConditionPage path=':conditionId'>
                        <NewPaymentPage path='payments/new'/>
                    </ConditionPage>
                </PartRoute>
            </ContestPage>

            <UpdatePaymentPage path='payments/:paymentId/update'/>

            <PartRoute path='posts'>
                <NewPostPage path='new'/>
            </PartRoute>
        </CurrentWeddingPage>

        <WeddingPage path='weddings/:weddingId'>
            <PartRoute path='guest'>
                <NewGuestPage path='new'/>
                <NotAuthPage path='not-auth'/>
            </PartRoute>

            <PartRoute path='card'>
                <NewCardPage path='new'/>
                <UpdateCardPage path=':id/update'/>
            </PartRoute>
        </WeddingPage>

        <NotFound default/>
    </Router>
)
