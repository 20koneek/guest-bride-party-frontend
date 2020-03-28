import React, { FC } from 'react'
import { Props } from './types'

export const Guests: FC<Props> = ({ children }) => (
    <div>
        <div>Guests</div>

        {children}
    </div>
)
