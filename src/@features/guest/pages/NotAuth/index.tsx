import React, { FC } from 'react'
import { RouteComponentProps } from '@reach/router'
import { New } from '../../templates'
import { PrimaryText } from '../../../../@ui/atoms/PrimaryText'

export const NotAuth: FC<RouteComponentProps> = () => (
    <New>
        <PrimaryText>Извините, но Вас не пригласили. :C</PrimaryText>
    </New>
)
