import React, { FC } from 'react'
import { PaymentValues, Props } from './types'
import { AmountForm } from '../AmountForm'
import { useForm } from 'react-hook-form'
import { Column } from '@ui'
import { SubmitButton } from '../../atoms/'

export const PaymentForm: FC<Props> = ({ onChange, values }) => {
    const { control, handleSubmit } = useForm<PaymentValues>({ defaultValues: { amount: values[0] } })
    const onSubmit = handleSubmit(({ amount }) => onChange(amount))

    return (
        <form onSubmit={onSubmit}>
            <Column size='large'>
                <AmountForm
                    name="amount"
                    values={values}
                    control={control}
                />

                <SubmitButton>Оплатить</SubmitButton>
            </Column>
        </form>
    )
}
