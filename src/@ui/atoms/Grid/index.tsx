import React, { FC } from 'react'
import classNames from 'classnames'
import styles from './styles.css'
import { Props } from './types'

export const Grid: FC<Props> = ({ children, cell, className }) => (
    <div
        className={classNames(styles.grid, className)}
        style={typeof cell === 'number' ? {
            gridTemplateColumns: `repeat(auto-fill, minmax(${cell}px, 1fr))`,
            gridAutoRows: `${cell}px`,
        } : {
            gridTemplateColumns: `repeat(auto-fill, minmax(${cell.width}px, 1fr))`,
            gridAutoRows: `${cell.height}px`,
        }}
    >
        {children}
    </div>
)
