import React from 'react'
import { Controller } from 'react-hook-form'
import { TextField } from '@material-ui/core'
import { Props } from './types'

type FCG = <T>(props: Props<T>) => React.ReactElement<Props<T>>

export const TextFieldForm: FCG = ({
    control,
    name,
    ...props
}) => (
    <Controller
        as={<TextField/>}
        {...props}
        name={name}
        control={control}
        disabled={control.formStateRef.current.isSubmitting}
        error={!!control.formStateRef.current.errors[name]}
        helperText={control.formStateRef.current.errors[name]?.message}
    />
)
