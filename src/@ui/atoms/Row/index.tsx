import React, { FC } from 'react'
import classNames from 'classnames'
import styles from './styles.css'
import { Props } from './types'

export const Row: FC<Props> = ({ children, className, size = 'medium', direction = 'left' }) => (
    <div
        className={classNames(
            styles.row,
            styles[size],
            styles[direction],
            className,
        )}
    >
        {children}
    </div>
)
