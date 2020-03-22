import React from 'react'
import { AddCardPage, NewGuestPage, NotAuthPage } from './pages'

export enum Routes {
    Index = '/guest',
    New = '/guest/:weddingId',
    AddCard = '/guest/add-card',
    NotAuth = '/guest/not-auth'
}

export const routes = [
    <NewGuestPage key={Routes.New} path={Routes.New}/>,
    <AddCardPage key={Routes.AddCard} path={Routes.AddCard}/>,
    <NotAuthPage key={Routes.NotAuth} path={Routes.NotAuth}/>,
]
