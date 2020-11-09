import React from 'react'
import { navigate } from '@reach/router'
import { CardStatus, Guest } from 'types/graphql.d'
import { WithOutCard } from './types'

export const withOutCard: WithOutCard = (Component) => (props) => {
    // @ts-ignore
    const currentGuest: Guest | undefined = props.currentGuest
    const cardStatus = currentGuest?.card?.status

    if (cardStatus && cardStatus !== CardStatus.Init) {
        navigate('/')
        return null
    }

    return (
        <Component {...props}/>
    )
}
