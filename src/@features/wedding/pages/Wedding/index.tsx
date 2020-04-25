import React, { FC } from 'react'
import { Container } from '@material-ui/core'
import { Column, Loading } from '@ui'
import { Props } from './types'
import { useWeddingQuery } from '../../hooks'

export const Wedding: FC<Props> = ({ children }) => {
    const { data, loading, error } = useWeddingQuery()
    console.log(data)
    return (
        <Container>
            <Column>
                <Loading
                    loading={loading}
                    error={error}
                >
                    {children}
                </Loading>
            </Column>
        </Container>
    )
}