import React from 'react'
import { navigate } from '@reach/router'
import { WithCard } from './types'
import { CardStatus } from '../../../../types/graphql.d'
import { Routes } from '../../routes'

export const withCard: WithCard = (Component) => (props) => {
    // @ts-ignore
    if (props?.currentGuest.cardStatus === CardStatus.NotSet) {
        navigate(Routes.AddCard)
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
