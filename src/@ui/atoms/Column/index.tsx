import React, { FC } from 'react'
import classNames from 'classnames'
import styles from './styles.css'
import { Props } from './types'

export const Column: FC<Props> = ({ children, className, size = 'medium' }) => (
    <div className={classNames(styles.column, styles[size], className)}>
        {children}
    </div>
)
