import React, { FC } from 'react'
import { Loading } from '@ui'
import { Props } from './types'
import { useWeddingQuery } from '../../hooks'
import { WeddingTemplate } from '../../templates/WeddingTemplate'

export const Wedding: FC<Props> = ({ children, weddingId }) => {
    const { data, loading, error } = useWeddingQuery({ id: weddingId ?? '' })

    return (
        <Loading
            loading={loading}
            error={error}
        >
            {data?.wedding && (
                <WeddingTemplate wedding={data?.wedding}>
                    {children}
                </WeddingTemplate>
            )}
        </Loading>
    )
}
