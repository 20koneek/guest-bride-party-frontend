import React, { FC } from 'react'
import { ContentColumn } from '@ui'
import { Props } from './types'

export const WeddingTemplate: FC<Props> = ({ children, wedding }) => (
    <ContentColumn title={wedding.title}>
        {children}
    </ContentColumn>
)
