import React, { FC } from 'react'
import { Props } from './types'
import { useConditionQuery } from '../../hooks'
import { ContentColumn, Loading } from '@ui'

export const Condition: FC<Props> = ({ conditionId, contestId, children }) => {
    const { data, loading, error } = useConditionQuery({ contestId: contestId ?? '', conditionId: conditionId ?? '' })

    return (
        <Loading
            loading={loading}
            error={error}
        >
            <ContentColumn
                variant='body1'
                color='textPrimary'
                title={data.condition?.name ?? ''}
            >
                {children}
            </ContentColumn>
        </Loading>
    )
}
