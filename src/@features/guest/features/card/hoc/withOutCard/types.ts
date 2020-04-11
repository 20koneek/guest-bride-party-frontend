import { FC } from 'react'

export type WithOutCard = <T>(component: FC<T>) => FC<T>
