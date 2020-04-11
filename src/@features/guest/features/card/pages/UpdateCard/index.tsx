import React, { FC, useEffect } from 'react'
import { Props } from './types'
import { useUpdateCardMutation } from '../../hooks'
import { Loading } from '@ui'
import { CardStatus } from '../../../../../../types/graphql.d'
import { parse } from 'query-string'

export const UpdateCard: FC<Props> = ({ id, location, navigate }) => {
    const [updateCard, updateCardMutation] = useUpdateCardMutation()

    useEffect(() => {
        if (id) {
            const { status } = parse(location?.search ?? '') as { status: CardStatus }

            updateCard({ variables: { id, status } })
                .then(() => navigate?.('/guest'))
        }
    }, [id])

    return (
        <Loading
            loading={updateCardMutation.loading}
            error={updateCardMutation.error}
        />
    )
}
