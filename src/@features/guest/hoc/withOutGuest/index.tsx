import React from 'react'
import { navigate } from '@reach/router'
import { WithOutGuest } from './types'
import { Routes } from '../../routes'
import { Routes as CardRoutes } from '../../features/card/routes'

export const withOutGuest: WithOutGuest = (Component) => (props) => {
    // @ts-ignore
    if (props?.currentGuest) {
        navigate(`${Routes.Index}${CardRoutes.AddCard}`)
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
