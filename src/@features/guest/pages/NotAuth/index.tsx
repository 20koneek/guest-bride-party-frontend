import React, { FC } from 'react'
import { RouteComponentProps } from '@reach/router'
import { New } from '../../templates'
import { Page, PrimaryText } from '@ui'

export const NotAuth: FC<RouteComponentProps> = () => (
    <Page>
        <New>
            <PrimaryText>Извините, но Вас не пригласили. :C</PrimaryText>
        </New>
    </Page>
)
