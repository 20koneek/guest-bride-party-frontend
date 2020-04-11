import React, { FC } from 'react'
import { Props } from './types'
import { Container } from '@material-ui/core'
import { PrimaryText } from '@ui'

export const Guest: FC<Props> = ({ children, currentGuest }) => (
    <Container>
        <PrimaryText>
            GUEST {currentGuest?.name}
        </PrimaryText>

        {children}
    </Container>
)
