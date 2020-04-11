import React, { FC } from 'react'
import { Props } from './types'
import {
    List,
    ListItem,
    ListItemText,
} from '@material-ui/core'
import { Loading } from '@ui'
import { useContestQuery } from '../../../../hooks'

export const Conditions: FC<Props> = ({ contestId, navigate }) => {
    const { data, loading, error } = useContestQuery(contestId ?? '')

    return (
        <Loading
            loading={loading}
            error={error}
        >
            <List>
                {data?.currentContest.conditions.map(({ id, name }) => (
                    <ListItem key={id} onClick={() => navigate?.(`${id}/payments/new`)}>
                        <ListItemText primary={name}/>
                    </ListItem>
                ))}
            </List>
        </Loading>
    )
}
