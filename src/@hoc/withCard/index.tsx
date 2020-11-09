import React from 'react'
import { Guest } from 'types/graphql.d'
import { WithCard } from './types'

export const withCard: WithCard = (Component) => (props) => {
    // @ts-ignore
    const currentGuest: Guest | undefined = props.currentGuest
    const cardStatus = currentGuest?.card?.status
    console.log(cardStatus)
    // if (cardStatus === CardStatus.Confirmed) {
    // @ts-ignore
    // props?.navigate(Routes.AddCard)
    // return null
    // }

    return (
        <Component
            {...props}
            // @ts-ignore
            currentGuest={props.currentGuest}
        />
    )
}
