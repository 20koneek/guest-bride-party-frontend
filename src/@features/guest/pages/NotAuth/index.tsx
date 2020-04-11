import React, { FC } from 'react'
import { RouteComponentProps } from '@reach/router'
import { New } from '../../templates'
import { PrimaryText } from '@ui'

export const NotAuth: FC<RouteComponentProps> = () => (
    <New>
        <PrimaryText>Извините, но Вас не пригласили. :C</PrimaryText>
    </New>
)
