import React, { FC } from 'react'
import styles from './styles.css'
import { Props } from './types'

export const Cell: FC<Props> = ({ children }) => (
  <div
    className={styles.main}
    style={{
      gridRow: '2 / span 1',
      gridColumn: '5 / span 4',
    }}
  >
    {children}
  </div>
)
