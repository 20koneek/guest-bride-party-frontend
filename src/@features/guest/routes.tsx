import React from 'react'
import { AddCardPage, NewGuestPage } from './pages'

export enum Routes {
    // New = 'guest/new',
    New = '/',
    AddCard = '/guest/add-card'
}

export const routes = [
    <NewGuestPage key={Routes.New} path={Routes.New}/>,
    <AddCardPage key={Routes.AddCard} path={Routes.AddCard}/>,
]
