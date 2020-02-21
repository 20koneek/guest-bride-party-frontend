import React, { FC } from 'react'
import { ListItemAvatar, ListItemText } from '@material-ui/core'
import { Image } from '@material-ui/icons'
import { Props } from './types'
import { Avatar } from '../../atoms/Avatar'

export const AvatarListItem: FC<Props> = ({ primary, secondary }) => (
  <>
    <ListItemAvatar>
      <Avatar>
        <Image/>
      </Avatar>
    </ListItemAvatar>

    <ListItemText
      primary={primary}
      secondary={secondary}
    />
  </>
)
