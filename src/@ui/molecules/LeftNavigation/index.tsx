import React, { FC } from 'react'
import { Props } from './types'
import { ArrowBackIos } from '@material-ui/icons'
import { Hidden, Typography } from '@material-ui/core'
import { Action, Row } from '../../atoms'

export const LeftNavigation: FC<Props> = ({ onClick, children }) => (
    <Hidden smUp>
        <Action onClick={onClick}>
            <Row size='nullable'>
                <ArrowBackIos
                    color='primary'
                    fontSize='large'
                />

                <Typography variant="h5" color='primary'>
                    {children}
                </Typography>
            </Row>
        </Action>
    </Hidden>
)
