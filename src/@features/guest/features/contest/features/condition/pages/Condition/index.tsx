import React, { FC } from 'react'
import { Props } from './types'

export const Condition: FC<Props> = ({ id, children, ...props }) => {
    return (
        <div>
            contest show {id}
            {children}
        </div>
    )
}
