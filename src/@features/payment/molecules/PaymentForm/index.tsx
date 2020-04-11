import React, { FC } from 'react'
import { PaymentValues, Props } from './types'
import { AmountForm } from '../AmountForm'
import { useForm } from 'react-hook-form'
import { Column } from '@ui'
import { SubmitButton } from '../../atoms/'
import { LinearProgress } from '@material-ui/core'

export const PaymentForm: FC<Props> = ({ onChange, values, loading }) => {
    const { control, handleSubmit } = useForm<PaymentValues>({ defaultValues: { amount: values[0] } })
    const onSubmit = handleSubmit(({ amount }) => onChange(amount))

    return (
        <form onSubmit={onSubmit}>
            <Column size='large'>
                <AmountForm
                    name="amount"
                    values={values}
                    control={control}
                    disabled={loading}
                />

                <SubmitButton disabled={loading}>
                    Оплатить
                </SubmitButton>

                <LinearProgress hidden={!loading}/>
            </Column>
        </form>
    )
}
