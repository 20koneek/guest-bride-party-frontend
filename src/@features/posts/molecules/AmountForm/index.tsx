import React from 'react'
import { Controller } from 'react-hook-form'
import { Props } from './types'
import { AmountInput } from '../'

type FCG = <T>(props: Props<T>) => React.ReactElement<Props<T>>

export const AmountForm: FCG = ({
    control,
    name,
    ...props
}) => (
    <Controller
        as={<AmountInput/>}
        name={name}
        control={control}
        {...props}
    />
)
