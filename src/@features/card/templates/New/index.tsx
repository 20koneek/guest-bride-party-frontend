import React, { FC } from 'react'
import { Props } from './types'
import { Center, Page } from '@ui'

export const New: FC<Props> = ({ children }) => (
    <Page>
        <Center>
            {children}
        </Center>
    </Page>
)
