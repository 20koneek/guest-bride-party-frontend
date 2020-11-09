import React from 'react'
import { WithGuest } from './types'

export const withGuest: WithGuest = (Component) => (props) => {
    // @ts-ignore
    if (!props?.currentGuest) {
        // @ts-ignore
        props?.navigate('not-auth')
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
