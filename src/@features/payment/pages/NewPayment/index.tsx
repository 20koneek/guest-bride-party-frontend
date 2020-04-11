import React, { FC } from 'react'
import { Props } from './types'
import { PaymentForm } from '../../molecules/PaymentForm'

export const NewPayment: FC<Props> = ({ path, uri, ...props }) => {
    console.log({ path, uri , props})
    return (
        <PaymentForm
            values={[100, 300, 1000, 5000]}
            onChange={console.log}
        />
    )
}
