import React, { FC } from 'react'
import { navigate } from '@reach/router'
import { Props } from './types'
import { Divider, ListItem, ListItemText } from '@material-ui/core'

export const RetailerPreview: FC<Props> = ({ id, inn, name }) => (
  <>
    <ListItem
      style={{ paddingLeft: 0, paddingRight: 0 }}
      onClick={() => navigate(`retailers/${id}`)}
    >
      <ListItemText
        primary={name}
        secondary={inn}
      />
    </ListItem>

    <Divider/>
  </>
)
