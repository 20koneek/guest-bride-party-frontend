import React, { FC } from 'react'
import classNames from 'classnames'
import styles from './styles.css'
import { Props } from './types'

export const Wrapper: FC<Props> = ({ children, className }) => (
  <div className={classNames(styles.wrapper, className)}>
    {children}
  </div>
)
