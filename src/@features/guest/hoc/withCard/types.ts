import { FC } from 'react'

export type WithCard = <T>(component: FC<T>) => FC<T>
