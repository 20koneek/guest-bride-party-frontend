import React from 'react'
import { WithGuest } from './types'
import { Loading } from '@ui'
import { useCurrentGuestQuery } from '@features/guest/hooks'

export const withGuest: WithGuest = (Component) => ({
    ...props
}) => {
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
