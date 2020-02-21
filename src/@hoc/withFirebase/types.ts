import { FC } from 'react'
import { FirebaseContextProps } from '@lib/firebaseContext/types'

export type WithFirebase = <T>(component: FC<T & FirebaseContextProps>) => FC<T>
