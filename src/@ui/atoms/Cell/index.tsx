import React, { FC } from 'react'
import styles from './styles.css'
import { Props } from './types'

export const Cell: FC<Props> = ({ column, row, children }) => (
    <div
        className={styles.cell}
        style={{
            gridRow: row ? `span ${row}` : '',
            gridColumn: column ? `span ${column}` : '',
        }}
    >
        {children}
    </div>
)
