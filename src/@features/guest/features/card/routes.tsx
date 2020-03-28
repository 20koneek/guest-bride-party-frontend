import React from 'react'
import { AddCardPage } from './pages'

export enum Routes {
    AddCard = 'card',
    UpdateCard = 'update-card/:id',
}

export const routes = [
    <AddCardPage key={Routes.AddCard} path={Routes.AddCard}/>,
    // <UpdateCardPage key={Routes.UpdateCard} path={Routes.UpdateCard}/>,
]
