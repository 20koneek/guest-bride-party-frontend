import React from 'react'
import { navigate } from '@reach/router'
import { WithOutCard } from './types'
import { CardStatus } from '../../../../types/graphql.d'

export const withOutCard: WithOutCard = (Component) => (props) => {
    // @ts-ignore
    const cardStatus: CardStatus = props.currentGuest?.cardStatus

    if (cardStatus && cardStatus !== CardStatus.NotSet) {
        navigate('/wedding')
        return null
    }

    return (
        <Component {...props}/>
    )
}
