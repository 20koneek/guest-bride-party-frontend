import React, { FC } from 'react'
import { Link } from '@material-ui/core'
import { Props } from './types'

export const Action: FC<Props> = ({ onClick, className, children }) => (
    <Link
        component="button"
        underline='none'
        className={className}
        onClick={onClick}
    >
        {children}
    </Link>
)
