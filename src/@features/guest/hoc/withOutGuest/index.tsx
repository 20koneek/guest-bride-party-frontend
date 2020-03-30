import React from 'react'
import { WithOutGuest } from './types'
import { Guest } from '../../../../types/graphql.d'

export const withOutGuest: WithOutGuest = (Component) => (props) => {
    // @ts-ignore
    const currentGuest: Guest = props?.currentGuest

    if (currentGuest) {
        // @ts-ignore
        // props?.navigate(`/guest/card/${CardRoutes.New}`)
        return null
    }

    return (
        <Component {...props}/>
    )
}
