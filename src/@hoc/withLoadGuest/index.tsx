import React from 'react'
import { Loading } from '@ui'
import { WithLoadGuest } from './types'
import { useCurrentGuestQuery } from '@features/guest/hooks'

export const withLoadGuest: WithLoadGuest = (Component) => (props) => {
    const { data, loading, error } = useCurrentGuestQuery()

    return (
        <Loading loading={loading}>
            <Component
                {...props}
                currentGuest={data?.currentGuest}
                error={error}
            />
        </Loading>
    )
}
