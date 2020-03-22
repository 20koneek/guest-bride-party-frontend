import React from 'react'
import { AddCardPage, NewGuestPage } from './pages'

export enum Routes {
    Index = '/guest',
    New = '/guest/:weddingId',
    AddCard = '/guest/add-card'
}

export const routes = [
    <NewGuestPage key={Routes.New} path={Routes.New}/>,
    <AddCardPage key={Routes.AddCard} path={Routes.AddCard}/>,
]
