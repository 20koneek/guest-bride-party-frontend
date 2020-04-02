import React, { FC } from 'react'
import { Props } from './types'
import { useWeddingQuery } from '../../hooks'
import { Container, IconButton, Typography } from '@material-ui/core'
import { Card, CardActions, CardContent, Cell, Grid, Loading } from '@ui/atoms'
import { FavoriteBorder, Fullscreen } from '@material-ui/icons'

export const Contests: FC<Props> = ({ currentGuest }) => {
    const { data, loading, error } = useWeddingQuery()
    return (
        <Loading
            loading={loading}
            error={error}
        >
            <React.Fragment>
                <Container>
                    <Typography variant="h4">
                        {data?.currentWedding.name}
                    </Typography>

                    <Grid cell={{ width: 250, height: 200 }}>
                        {data?.currentWedding.contests.map(({ id, name, conditions }) => (
                            <Cell key={id}>
                                <Card>
                                    <CardContent style={{ maxHeight: '100%', overflow: 'hidden' }}>
                                        <Typography onClick={console.log} variant="h5" component="h5">
                                            {name}
                                        </Typography>

                                        {conditions.map(({ id, name }) => (
                                            <Typography key={id}>
                                                {name}
                                            </Typography>
                                        ))}
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
            </React.Fragment>
        </Loading>
    )
}
