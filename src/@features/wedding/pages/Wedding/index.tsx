import React, { FC } from 'react'
import { Loading, Page } from '@ui'
import { Props } from './types'
import { useWeddingQuery } from '../../hooks'
import { WeddingTemplate } from '../../templates/WeddingTemplate'

export const Wedding: FC<Props> = ({ children, weddingId }) => {
    const { data, loading, error } = useWeddingQuery({ id: weddingId ?? '' })

    return (
        <Page>
            <Loading
                loading={loading}
                error={error}
            >
                {data?.weddingInfo && (
                    <WeddingTemplate wedding={data?.weddingInfo}>
                        {children}
                    </WeddingTemplate>
                )}
            </Loading>
        </Page>
    )
}
