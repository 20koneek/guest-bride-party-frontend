import React, { FC } from 'react'
import { Props } from './types'
import { useWeddingQuery } from '../../hooks'
import { Container, IconButton, Typography } from '@material-ui/core'
import { Card, CardActions, CardContent, Cell, Grid, Loading } from '@ui/atoms'
import { FavoriteBorder, Fullscreen } from '@material-ui/icons'

export const Contests: FC<Props> = ({ currentGuest, navigate }) => {
    const { data, loading, error } = useWeddingQuery()
    return (
        <Loading
            loading={loading}
            error={error}
        >
            <Container>
                <Typography variant="h4">
                    {data?.currentWedding.name}
                </Typography>

                <Grid cell={{ width: 250, height: 130 }}>
                    {data?.currentWedding.contests.map(({ id, name, conditions }) => (
                        <Cell key={id}>
                            <Card>
                                <CardContent style={{ maxHeight: '100%', overflow: 'hidden' }}>
                                    <Typography
                                        variant="h5"
                                        component="h5"
                                        onClick={() => navigate?.(`contests/${id}`)}
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
            </Container>
        </Loading>
    )
}
