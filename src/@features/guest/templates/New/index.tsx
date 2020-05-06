import React, { FC } from 'react'
import { Center } from '@ui'
import { Props } from './types'

export const New: FC<Props> = ({ children }) => (
    <Center>
        {children}
    </Center>
)
