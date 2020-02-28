import React from 'react'
import { Controller } from 'react-hook-form'
import { TextField } from '@material-ui/core'
import { Props } from './types'

type FCG = <T>(props: Props<T>) => React.ReactElement<Props<T>>
export const TextFieldForm: FCG = ({
    control,
    name,
    errors,
    ...props
}) => (
    <Controller
        as={<TextField/>}
        name={name}
        control={control}
        error={control.formState.isSubmitted && !control.formState.isValid}
        disabled={control.formState.isSubmitting}
        // @ts-ignore
        helperText={errors[name]?.message}
        {...props}
    />
)
