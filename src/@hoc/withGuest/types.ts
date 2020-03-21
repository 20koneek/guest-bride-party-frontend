import { FC } from 'react'
import { FirebaseContextProps } from '@lib/firebaseContext/types'
import { Guest } from '../../../types/graphql.d'

export interface WithGuestProps {
    currentGuest: Guest
}

export type WithGuest = <T extends FirebaseContextProps>(component: FC<Without<T, FirebaseContextProps> & WithGuestProps>) => FC<T>

