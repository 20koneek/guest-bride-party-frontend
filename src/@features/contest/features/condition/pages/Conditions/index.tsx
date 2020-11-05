import React, { FC, useCallback } from 'react'
import { Props } from './types'
import { List } from '@material-ui/core'
import { ColorListItem, Loading } from '@ui'
import { useContestQuery } from '../../../../hooks'

export const Conditions: FC<Props> = ({ contestId, navigate }) => {
    const { data, loading, error } = useContestQuery(contestId ?? '')
    const onClick = useCallback((id) => () => navigate?.(`${id}/payments/new`), [navigate])

    return (
        <Loading
            loading={loading}
            error={error}
        >
            <List>
                {data?.currentContest.conditions.map(({ id, name, color }) => (
                    <ColorListItem
                        key={id}
                        primary={name}
                        color={color.value}
                        onClick={onClick(id)}
                    />
                ))}
            </List>
        </Loading>
    )
}
