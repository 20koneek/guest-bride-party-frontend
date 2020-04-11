import React, { FC } from 'react'
import { Props } from './types'
import { PaymentForm } from '../../molecules/PaymentForm'
import { useCreatePaymentMutation } from '../../hooks'

export const NewPayment: FC<Props> = ({ conditionId, navigate }) => {
    const [createPayment, { loading }] = useCreatePaymentMutation()

    const onChange = (amount: number) => {
        createPayment({
            variables: {
                input: {
                    amount,
                    conditionId: conditionId ?? '',
                },
            },
        }).then(() => navigate?.('../../../'))
    }

    return (
        <PaymentForm
            loading={loading}
            values={[100, 300, 1000, 5000]}
            onChange={onChange}
        />
    )
}
