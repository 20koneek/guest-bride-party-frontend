import React from 'react'
import { navigate } from '@reach/router'
import { WithGuest } from './types'
import { Routes } from '../../routes'

export const withGuest: WithGuest = (Component) => (props) => {
    // @ts-ignore
    if (!props?.currentGuest) {
        navigate(Routes.NotAuth)
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
