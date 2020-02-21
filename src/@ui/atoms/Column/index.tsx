import React, { FC } from 'react'
import classNames from 'classnames'
import styles from './styles.css'
import { Props } from './types'

export const Column: FC<Props> = ({ children, className }) => (
  <div className={classNames(styles.column, className)}>
    {children}
  </div>
)
