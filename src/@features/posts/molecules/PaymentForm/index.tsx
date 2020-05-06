import React, { FC } from 'react'
import { PaymentValues, Props } from './types'
import { useForm } from 'react-hook-form'

export const PaymentForm: FC<Props> = ({ onChange, values, loading }) => {
    const { handleSubmit } = useForm<PaymentValues>({ defaultValues: { amount: values[0] } })
    const onSubmit = handleSubmit(({ amount }) => onChange(amount))

    return (
        <form onSubmit={onSubmit}>
            Post
        </form>
    )
}
