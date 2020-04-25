import React, { FC } from 'react'
import { IconButton, Typography } from '@material-ui/core'
import { FavoriteBorder, Fullscreen } from '@material-ui/icons'
import { Card, CardActions, CardContent, Cell, Grid, Loading } from '@ui'
import { Props } from './types'
import { useWeddingQuery } from '../../../../hooks'

export const Contests: FC<Props> = ({ navigate }) => {
    const { data, loading, error } = useWeddingQuery()

    return (
        <Loading
            loading={loading}
            error={error}
        >
            <Typography variant="h4" color='primary'>
                {data?.currentWedding.name}
            </Typography>

            <Grid cell={{ width: 250, height: 130 }}>
                {data?.currentWedding.contests.map(({ id, name }) => (
                    <Cell key={id}>
                        <Card>
                            <CardContent>
                                <Typography
                                    variant="h5"
                                    component="h5"
                                    onClick={() => navigate?.(`contests/${id}/conditions`)}
                                >
                                    {name}
                                </Typography>
                            </CardContent>

                            <CardActions disableSpacing>
                                <IconButton>
                                    <FavoriteBorder/>
                                </IconButton>

                                <IconButton style={{ marginLeft: 'auto' }}>
                                    <Fullscreen/>
                                </IconButton>
                            </CardActions>
                        </Card>
                    </Cell>
                ))}
            </Grid>
        </Loading>
    )
}
