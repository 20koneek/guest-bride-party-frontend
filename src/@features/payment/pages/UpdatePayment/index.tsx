import React, { FC, useEffect } from 'react'
import { parse } from 'query-string'
import { Loading } from '@ui'
import { Props } from './types'
import { useUpdatePaymentStatusMutation } from '../../hooks'
import { PaymentStatus } from '../../../../types/graphql.d'

export const UpdatePayment: FC<Props> = ({ paymentId, location, navigate }) => {
    const [updatePaymentStatus, { loading, error }] = useUpdatePaymentStatusMutation()

    useEffect(() => {
        if (paymentId) {
            const { status } = parse(location?.search ?? '') as { status: PaymentStatus }

            updatePaymentStatus({ variables: { id: paymentId, status } })
                .then(() => navigate?.('/wedding'))
        }
    }, [location, navigate, paymentId, updatePaymentStatus])

    return (
        <Loading
            loading={loading}
            error={error}
        />
    )
}
