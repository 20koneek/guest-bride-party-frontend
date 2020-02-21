import { FC } from 'react'
import { FirebaseContextProps } from '@lib/firebaseContext/types'

export type WithAdminRoute = <T extends FirebaseContextProps>(component: FC<T>) => FC<T>
