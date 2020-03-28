import React, { FC } from 'react'
import { Router } from '@reach/router'
import { GuestRouter } from '@features'
import { Routes } from './types'

export const BaseRouter: FC = () => (
    <Router>
        <GuestRouter path={Routes.Guest}/>
    </Router>
)
