import React, { FC } from 'react'
import { Props } from './types'
import { useContestQuery } from '../../hooks'
import {
    Hidden,
    List,
    ListItem,
    ListItemText,
    Typography,
} from '@material-ui/core'
import { Loading } from '@ui/atoms'
import { ArrowBackIos } from '@material-ui/icons'

export const Contest: FC<Props> = ({ id, navigate }) => {
    const { data, loading, error } = useContestQuery(id ?? '')

    return (
        <Loading
            loading={loading}
            error={error}
        >
            <Hidden smUp>
                <ArrowBackIos onClick={() => navigate?.('../')}/>
            </Hidden>

            <Typography variant="h4" color='primary'>
                {data?.currentContest.name}
            </Typography>


            <List>
                {data?.currentContest.conditions.map(({ id, name }) => (
                    <ListItem key={id} onClick={() => navigate?.(`conditions/${id}/payments/new`)}>
                        <ListItemText primary={name}/>
                    </ListItem>
                ))}
            </List>
        </Loading>
    )
}
