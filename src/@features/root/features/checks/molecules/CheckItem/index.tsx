import React, { FC } from 'react'
import { Price } from '@ui/atoms'
import { Props } from './types'
import { Divider, ListItem, ListItemText } from '@material-ui/core'

export const CheckItem: FC<Props> = ({ id, name, sum, price }) => (
  <>
    <ListItem style={{ paddingLeft: 0, paddingRight: 0 }}>
      <ListItemText
        primary={name}
        secondary={<Price value={price}/>}
      />

      <Price value={sum}/>
    </ListItem>

    <Divider/>
  </>
)
