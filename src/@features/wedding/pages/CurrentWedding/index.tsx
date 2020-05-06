import React, { FC } from 'react'
import { Loading } from '@ui'
import { Props } from './types'
import { useCurrentWeddingQuery } from '../../hooks'
import { WeddingTemplate } from '../../templates'

export const CurrentWedding: FC<Props> = ({ children }) => {
    const { data, loading, error } = useCurrentWeddingQuery()

    return (
        <Loading
            loading={loading}
            error={error}
        >
            {data?.currentWedding && (
                <WeddingTemplate wedding={data?.currentWedding}>
                    {children}
                </WeddingTemplate>
            )}
        </Loading>
    )
}
