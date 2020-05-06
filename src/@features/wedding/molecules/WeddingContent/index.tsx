import React, { FC } from 'react'
import { Column, ToStart } from '@ui'
import { Props } from './types'
import { NewPostButton } from '../../atoms'

export const WeddingContent: FC<Props> = ({ children }) => (
    <ToStart>
        <Column>
            <NewPostButton/>

            {children}
        </Column>
    </ToStart>
)
