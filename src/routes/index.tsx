import React, { FC } from 'react'
import { Router } from '@reach/router'
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
    PostsPage,
    UpdateCardPage,
    UpdatePaymentPage,
    WeddingPage,
} from '@features'
import { PartRoute } from './PartRoute'

export const BaseRouter: FC = () => (
    <Router>
        <CurrentWeddingPage path='/'>
            <PostsPage path='/'>
                <ContestsPage path='/'/>

                <UpdatePaymentPage path='payments/:paymentId/update'/>
            </PostsPage>

            <ContestPage path='contests/:contestId'>
                <PartRoute path='conditions'>
                    <ConditionsPage path='/'/>

                    <ConditionPage path=':conditionId'>
                        <NewPaymentPage path='payments/new'/>
                    </ConditionPage>
                </PartRoute>
            </ContestPage>

            <PartRoute path='posts'>
                <NewPostPage path='new'/>
            </PartRoute>

            <PartRoute path='card'>
                <NewCardPage path='new'/>
                <UpdateCardPage path=':id/update'/>
            </PartRoute>
        </CurrentWeddingPage>

        <WeddingPage path='weddings/:weddingId'>
            <PartRoute path='guest'>
                <NewGuestPage path='new'/>
            </PartRoute>
        </WeddingPage>

        <NotAuthPage path='not-auth'/>
    </Router>
)
