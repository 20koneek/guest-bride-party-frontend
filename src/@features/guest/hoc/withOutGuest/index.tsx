import React from 'react'
import { navigate } from '@reach/router'
import { WithOutGuest } from './types'
import { Routes } from '../../routes'

export const withOutGuest: WithOutGuest = (Component) => (props) => {
    // @ts-ignore
    if (props?.currentGuest) {
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
