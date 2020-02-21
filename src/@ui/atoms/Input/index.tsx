import React, { FC } from 'react'
import classNames from 'classnames'
import { TextField } from '@material-ui/core'
import styles from './styles.css'
import { Props } from './types'
import { fieldToTextFieldProps } from './helpers'


const Input: FC<Props> = ({ children, className, ...props }) => (
  <TextField
    margin="normal"
    className={classNames(styles.main, className)}
    {...fieldToTextFieldProps(props)}
  >
    {children}
  </TextField>
)

export default Input
