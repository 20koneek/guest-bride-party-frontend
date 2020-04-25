import React, { FC } from 'react'
import { navigate } from '@reach/router'
import { LeftNavigation, Loading } from '@ui'
import { Props } from './types'
import { useContestQuery } from '../../hooks'

export const Contest: FC<Props> = ({ contestId, children }) => {
    const { data, loading, error } = useContestQuery(contestId ?? '')
    const onClickNavigation = () => navigate('../../')

    return (
        <Loading
            loading={loading}
            error={error}
        >
            <LeftNavigation onClick={onClickNavigation}>
                {data?.currentContest.name}
            </LeftNavigation>

            {children}
        </Loading>
    )
}
