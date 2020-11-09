import React, { FC, useCallback } from 'react'
import { Typography } from '@material-ui/core'
import { Card, CardContent, Cell, Grid, Loading } from '@ui'
import { Props } from './types'
import { useContestsQuery } from '../../hooks'

export const Contests: FC<Props> = ({ navigate }) => {
    const { data, loading, error } = useContestsQuery()

    const onClick = useCallback((id: string) => () => {
        navigate?.(`contests/${id}/conditions`)
    }, [navigate])

    return (
        <Loading
            loading={loading}
            error={error}
        >
            <Grid cell={{ width: 250, height: 130 }}>
                {data?.currentContests.map(({ id, name }) => (
                    <Cell key={id}>
                        <Card onClick={onClick(id)}>
                            <CardContent>
                                <Typography
                                    variant="h5"
                                    component="h5"
                                >
                                    {name}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Cell>
                ))}
            </Grid>
        </Loading>
    )
}
