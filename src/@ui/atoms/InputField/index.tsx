import React, { FC } from 'react'
import Input from '@ui/atoms/Input'
import { Field } from 'formik'
import { Props } from './types'

export const InputField: FC<Props> = ({ className, ...props }) => (
  <Field
    {...props}
    className={className}
    component={Input}
    margin="normal"
  />
)
