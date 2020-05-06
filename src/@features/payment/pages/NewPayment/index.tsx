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
        }).then(({ data }) => {
            if (data?.createPayment) {
                document.location.href = data.createPayment
            }
        })
    }

    console.log(loading)

    return (
        <PaymentForm
            loading={loading}
            values={[100_00, 300_00, 1000_00, 5000_00]}
            onChange={onChange}
        />
    )
}
