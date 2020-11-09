import { FC } from 'react'

export type WithGuest = <T>(component: FC<T>) => FC<T>
