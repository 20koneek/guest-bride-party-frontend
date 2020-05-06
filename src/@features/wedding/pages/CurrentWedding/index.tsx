import React, { FC } from 'react'
import { Loading } from '@ui'
import { Props } from './types'
import { useCurrentWeddingQuery } from '../../hooks'
import { WeddingTemplate } from '../../templates'
import { WeddingContent } from '../../molecules/WeddingContent'

export const CurrentWedding: FC<Props> = ({ children }) => {
    const { data, loading, error } = useCurrentWeddingQuery()

    return (
        <Loading
            loading={loading}
            error={error}
        >
            {data?.currentWedding && (
                <WeddingTemplate wedding={data?.currentWedding}>
                    <WeddingContent>
                        {children}
                    </WeddingContent>
                </WeddingTemplate>
            )}
        </Loading>
    )
}
