import React from 'react'
import { WithCard } from './types'
import { CardStatus } from '../../../../types/graphql.d'
import { Routes } from '../../features/card/routes'

export const withCard: WithCard = (Component) => (props) => {
    // @ts-ignore
    if (props?.currentGuest.cardStatus === CardStatus.NotSet) {
        // @ts-ignore
        props?.navigate(Routes.AddCard)
        return null
    }

    return (
        <Component
            {...props}
            // @ts-ignore
            currentGuest={props.currentGuest}
        />
    )
}
