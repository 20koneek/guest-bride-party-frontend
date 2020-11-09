import React, { FC, useCallback } from 'react'
import { WeddingContent } from '@features/wedding/molecules/WeddingContent/index'
import { Props } from './types'

export const Posts: FC<Props> = ({ navigate, children }) => {
    const newPostOnClick = useCallback(() => {
        navigate?.('posts/new')
    }, [navigate])

    return (
        <WeddingContent newPostOnClick={newPostOnClick}>
            {children}
        </WeddingContent>
    )
}
