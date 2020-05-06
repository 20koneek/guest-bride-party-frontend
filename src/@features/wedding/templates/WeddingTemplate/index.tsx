import React, { FC } from 'react'
import { ContentColumn, Page } from '@ui'
import { Props } from './types'

export const WeddingTemplate: FC<Props> = ({ children, wedding }) => (
    <Page>
        <ContentColumn title={wedding.name}>
            {children}
        </ContentColumn>
    </Page>
)
