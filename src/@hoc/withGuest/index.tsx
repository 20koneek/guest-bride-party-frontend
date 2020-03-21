import React, { useEffect } from 'react'
import { navigate } from '@reach/router'
import { WithGuest } from './types'
import { Loading } from '@ui'
import { useCurrentGuestQuery } from '@features/guest/hooks'

export const withGuest: WithGuest = (Component) => ({ auth, currentUser, ...props }) => {
    const { data, loading, error } = useCurrentGuestQuery()

    useEffect(() => {
        if (error || !loading && data?.currentGuest) {
            navigate('/')
        }
    }, [data, loading, error])

    return (
        <Loading loading={loading}>
            {data?.currentGuest && (
                <Component {...props} currentGuest={data.currentGuest}/>
            )}
        </Loading>
    )
}
