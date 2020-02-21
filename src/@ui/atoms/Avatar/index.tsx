import React, { FC } from 'react'
import { Avatar as AvatarUI } from '@material-ui/core'
import { Props } from './types'

export const Avatar: FC<Props> = ({ children, className }) => (
  <AvatarUI className={className}>
    {children}
  </AvatarUI>
)
