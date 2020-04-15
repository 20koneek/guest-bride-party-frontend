import React, { FC } from 'react'
import { Props } from './types'
import { Container } from '@material-ui/core'
import { Column } from '@ui/atoms/Column'

export const Guest: FC<Props> = ({ children }) => (
    <Container>
        <Column>
            {children}
        </Column>
    </Container>
)
