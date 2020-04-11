import React, { FC } from 'react'
import { Props } from './types'

export const Condition: FC<Props> = ({ conditionId, contestId, children, ...props }) => {
    return (
        <div>
            contest show {contestId}
            {children}
        </div>
    )
}
