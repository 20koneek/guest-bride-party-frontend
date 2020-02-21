import React, { FC, memo } from 'react'
import { Props } from './types'

export const Loading: FC<Props> = memo<Props>(({
  loading,
  error,
  children
}) => (
  loading ? (
    <div>loading...</div>
  ) : error ? (
    <div>{error.message}</div>
  ) : (
    <>{children}</>
  )
))
