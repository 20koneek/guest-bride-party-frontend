import React, { FC } from 'react'
import { Props } from './types'
import { Container } from '@material-ui/core'

export const Guest: FC<Props> = ({ children }) => (
    <Container>
        GUEST
        {children}
    </Container>
)
