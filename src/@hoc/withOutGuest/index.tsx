import React from 'react'
import { navigate } from '@reach/router'
import { Guest } from 'types/graphql.d'
import { WithOutGuest } from './types'

export const withOutGuest: WithOutGuest = (Component) => (props) => {
    // @ts-ignore
    const currentGuest: Guest = props?.currentGuest

    if (currentGuest) {
        navigate(`/card/new`)
        return null
    }

    return (
        <Component {...props}/>
    )
}
