import React, { FC } from 'react'
import { Props } from './types'

export const Guest: FC<Props> = ({ children }) => (
    <div>
        <div>Guests</div>

        {children}
    </div>
)
