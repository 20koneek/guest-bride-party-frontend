import React, { FC } from 'react'
import { RouteComponentProps, Router } from '@reach/router'
import {
    NotAuthPage,
    NewGuestPage,
    NewCardPage,
    UpdateCardPage,
    ContestPage,
    ContestsPage,
    ConditionPage,
    NewPaymentPage,
    ConditionsPage,
    UpdatePaymentPage,
    WeddingPage,
} from '@features'
import { PartRoute } from './PartRoute'

const NotFound: FC<RouteComponentProps> = () => <p>Sorry, nothing here</p>

export const BaseRouter: FC = () => (
    <Router>
        <PartRoute path='wedding'>
            <WeddingPage path=':weddingId'>
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

                <PartRoute path='guest'>
                    <NewGuestPage path='new'/>
                    <NotAuthPage path='not-auth'/>

                    <PartRoute path='card'>
                        <NewCardPage path='new'/>
                        <UpdateCardPage path=':id/update'/>
                    </PartRoute>
                </PartRoute>
            </WeddingPage>
        </PartRoute>

        <NotFound default/>
    </Router>
)
