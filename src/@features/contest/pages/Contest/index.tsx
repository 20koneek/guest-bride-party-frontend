import React, { FC } from 'react'
import { ContentColumn, Loading } from '@ui'
import { Props } from './types'
import { useContestQuery } from '../../hooks'

export const Contest: FC<Props> = ({ contestId, children }) => {
    const { data, loading, error } = useContestQuery(contestId ?? '')

    return (
        <Loading
            loading={loading}
            error={error}
        >
            <ContentColumn
                variant='h5'
                title={data?.currentContest.name ?? ''}
            >
                {children}
            </ContentColumn>
        </Loading>
    )
}
