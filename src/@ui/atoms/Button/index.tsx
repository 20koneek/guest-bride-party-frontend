import React, { FC } from 'react'
import classNames from 'classnames'
import { Button as ButtonUI } from '@material-ui/core'
import styles from './styles.css'
import { Props } from './types'

export const Button: FC<Props> = ({ children, className, onClick }) => (
  <ButtonUI
    className={classNames(styles.button, className)}
    onClick={onClick}
  >
    {children}
  </ButtonUI>
)
