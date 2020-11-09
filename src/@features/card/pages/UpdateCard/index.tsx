import React, { FC, useEffect } from 'react'
import { parse } from 'query-string'
import { Loading } from '@ui'
import { Props } from './types'
import { useUpdateCardMutation } from '../../hooks'
import { PaymentStatus } from 'types/graphql.d'

export const UpdateCard: FC<Props> = ({ id, location, navigate }) => {
    const [updateCard, updateCardMutation] = useUpdateCardMutation()

    useEffect(() => {
        if (id) {
            const { status } = parse(location?.search ?? '') as { status: PaymentStatus }

            updateCard({ variables: { id, status } })
                .then(() => navigate?.('/wedding'))
        }
    }, [id, location, navigate, updateCard])

    return (
        <Loading
            loading={updateCardMutation.loading}
            error={updateCardMutation.error}
        />
    )
}
