import React, { FC } from 'react'
import { Props } from './types'
import { useConditionQuery } from '../../hooks'
import { Loading } from '@ui'

export const Condition: FC<Props> = ({ conditionId, contestId, children }) => {
    const { data, loading, error } = useConditionQuery({ contestId: contestId ?? '', conditionId: conditionId ?? '' })

    return (
        <Loading
            loading={loading}
            error={error}
        >
            {data.condition?.name}
            {children}
        </Loading>
    )
}
