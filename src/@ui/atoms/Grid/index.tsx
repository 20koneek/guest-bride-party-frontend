import React, { FC } from 'react'
import classNames from 'classnames'
import styles from './styles.css'
import { Props } from './types'

export const Grid: FC<Props> = ({ children, columns, rows, className }) => (
  <div
    className={classNames(styles.main, className)}
    style={{
      gridTemplateRows: '1fr '.repeat(rows ?? 1),
      gridTemplateColumns: '1fr '.repeat(columns ?? 1),
    }}
  >
    {children}
  </div>
)
