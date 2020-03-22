import React, { FC } from 'react'
import { Props } from './types'
import { AddCardTemplate } from '../../templates'
import { useAddCardMutation, useSkipCardMutation } from '../../hooks'

export const AddCard: FC<Props> = () => {
    const [addCard, addCardMutation] = useAddCardMutation()
    const [skipCard, skipCardMutation] = useSkipCardMutation()

    const addCardOnClick = async () => {
        const response = await addCard()
        const url = response?.data?.addCard

        if (url) {
            document.location.href = url
        }
    }

    const skipCardOnClick = async () => {
        await skipCard()
    }

    return (
        <AddCardTemplate
            addCard={{
                onClick: addCardOnClick,
                disabled: addCardMutation.loading,
            }}
            skipCard={{
                onClick: skipCardOnClick,
                disabled: skipCardMutation.loading,
            }}
        />
    )
}
