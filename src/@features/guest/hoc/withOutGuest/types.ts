import { FC } from 'react'

export type WithOutGuest = <T>(component: FC<T>) => FC<T>
