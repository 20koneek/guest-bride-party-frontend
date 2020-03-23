import React from 'react'
import { AddCardPage, NewGuestPage, NotAuthPage, UpdateCardPage } from './pages'

export enum Routes {
    Index = '/guest',
    New = '/guest/:weddingId',
    AddCard = '/guest/add-card',
    UpdateCard = '/guest/:cardStatus',
    NotAuth = '/guest/not-auth'
}

export const routes = [
    <NewGuestPage key={Routes.New} path={Routes.New}/>,
    <AddCardPage key={Routes.AddCard} path={Routes.AddCard}/>,
    <UpdateCardPage key={Routes.UpdateCard} path={Routes.UpdateCard}/>,
    <NotAuthPage key={Routes.NotAuth} path={Routes.NotAuth}/>,
]
