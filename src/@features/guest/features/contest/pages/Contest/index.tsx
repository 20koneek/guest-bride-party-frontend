import React, { FC } from 'react'
import { ArrowBackIos } from '@material-ui/icons'
import { Hidden, Typography } from '@material-ui/core'
import { Loading } from '@ui'
import { Props } from './types'
import { useContestQuery } from '../../hooks'

export const Contest: FC<Props> = ({ contestId, navigate, children }) => {
    const { data, loading, error } = useContestQuery(contestId ?? '')

    return (
        <Loading
            loading={loading}
            error={error}
        >
            <Hidden smUp>
                <ArrowBackIos onClick={() => navigate?.('../')}/>
            </Hidden>

            <Typography variant="h4" color='primary'>
                {data?.currentContest.name}
            </Typography>

            {children}
        </Loading>
    )
}
