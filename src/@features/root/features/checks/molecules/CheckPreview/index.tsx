import React, { FC } from 'react'
import { navigate } from '@reach/router'
import { Props } from './types'
import { Price, Timestamp } from '@ui/atoms'
import { Divider, ListItem, ListItemText } from '@material-ui/core'

export const CheckPreview: FC<Props> = ({ id, dateTime, totalSum, name }) => (
  <>
    <ListItem
      style={{ paddingLeft: 0, paddingRight: 0 }}
      onClick={() => navigate(`/checks/${id}`)}
    >
      <ListItemText
        primary={name ?? 'Не найдено'}
        secondary={<Timestamp timestamp={dateTime}/>}
      />

      <Price value={totalSum}/>
    </ListItem>

    <Divider/>
  </>
)
