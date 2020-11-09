import React, { FC } from 'react'
import { Loading, Page } from '@ui'
import { Props } from './types'
import { useCurrentWeddingQuery } from '../../hooks'
import { WeddingTemplate } from '../../templates'

export const CurrentWedding: FC<Props> = ({ children, navigate }) => {
    const { data, loading, error } = useCurrentWeddingQuery()

    return (
        <Page>
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
        </Page>
    )
}
