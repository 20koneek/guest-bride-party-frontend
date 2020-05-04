import React, { FC } from 'react'
import { Container, Typography } from '@material-ui/core'
import { Column, Loading } from '@ui'
import { Props } from './types'
import { useWeddingQuery } from '../../hooks'

export const Wedding: FC<Props> = ({ children, weddingId }) => {
    const { data, loading, error } = useWeddingQuery({ id: weddingId ?? '' })

    return (
        <Container>
            <Column>
                <Loading
                    loading={loading}
                    error={error}
                >
                    <Typography variant="h4" color='primary'>
                        {data?.wedding.name}
                    </Typography>

                    {children}
                </Loading>
            </Column>
        </Container>
    )
}
