import React from 'react'
import { WithOutGuest } from './types'
import { Routes as CardRoutes } from '../../features/card/routes'

export const withOutGuest: WithOutGuest = (Component) => (props) => {
    // @ts-ignore
    if (props?.currentGuest) {
        // @ts-ignore
        props?.navigate(CardRoutes.AddCard)
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
