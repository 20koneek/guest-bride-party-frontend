import React, { FC, useEffect } from 'react'
import { Props } from './types'
import { useUpdateCardMutation } from '../../hooks'
import { Loading } from '@ui/atoms/Loading'

export const UpdateCard: FC<Props> = ({ cardStatus }) => {
    const [updateCard, updateCardMutation] = useUpdateCardMutation()

    useEffect(() => {
        if (cardStatus) {
            updateCard({ variables: { input: cardStatus } })
        }
    }, [cardStatus])

    return (
        <Loading
            loading={updateCardMutation.loading}
            error={updateCardMutation.error}
        />
    )
}
