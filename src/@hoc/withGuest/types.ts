import { FC } from 'react'
import { ApolloError } from 'apollo-client'
import { Guest } from '../../types/graphql.d'

export interface WithGuestProps {
    currentGuest?: Guest
    error?: ApolloError
}

export type WithGuest = <T>(component: FC<T & WithGuestProps>) => FC<T>
