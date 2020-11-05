import React, { FC } from 'react'
import { Loading } from '@ui'
import { Props } from './types'
import { useCurrentWeddingQuery } from '../../hooks'
import { WeddingTemplate } from '../../templates'
import { WeddingContent } from '../../molecules/WeddingContent'

export const CurrentWedding: FC<Props> = ({ children, navigate }) => {
    const { data, loading, error } = useCurrentWeddingQuery()

    const newPostOnClick = () => {
        navigate?.('posts/new')
    }

    return (
        <Loading
            loading={loading}
            error={error}
        >
            {data?.currentWedding && (
                <WeddingTemplate wedding={data?.currentWedding}>
                    <WeddingContent newPostOnClick={newPostOnClick}>
                        {children}
                    </WeddingContent>
                </WeddingTemplate>
            )}
        </Loading>
    )
}
