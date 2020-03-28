import React from 'react'
import { navigate } from '@reach/router'
import { WithOutCard } from './types'
import { CardStatus } from '../../../../../../types/graphql.d'
import { Routes } from '../../../../routes'

export const withOutCard: WithOutCard = (Component) => (props) => {
    if (
        // @ts-ignore
        props.currentGuest?.cardStatus &&
        // @ts-ignore
        props.currentGuest?.cardStatus !== CardStatus.NotSet
    ) {
        navigate(Routes.Index)
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
