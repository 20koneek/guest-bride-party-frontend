import { FC } from 'react'
import { ApolloError } from 'apollo-client'
import { Guest } from '../../types/graphql.d'

export interface WithLoadGuestProps {
    currentGuest?: Guest
    error?: ApolloError
}

export type WithLoadGuest = <T>(component: FC<T & WithLoadGuestProps>) => FC<T>
