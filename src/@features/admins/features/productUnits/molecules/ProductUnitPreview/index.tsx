import React, { FC, useState } from 'react'
import { Props } from './types'
import {
  Avatar,
  Collapse,
  Divider,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
} from '@material-ui/core'
import { ProductUnitsList } from '../../template/ProductUnitsList'
import { ExpandLess, ExpandMore, Image, Send } from '@material-ui/icons'
import { navigate } from '@reach/router'

export const ProductUnitPreview: FC<Props> = ({ id, name }) => {
  const [open, setOpen] = useState<boolean>(() => false)
  const onClick = () => setOpen((prevState) => !prevState)

  return (
    <>
      <ListItem
        button
        style={{ paddingLeft: 0, paddingRight: 0 }}
        onClick={onClick}
      >
        {open ? (
          <ExpandLess/>
        ) : (
          <ExpandMore/>
        )}
        <ListItemAvatar>
          <Avatar>
            <Image/>
          </Avatar>
        </ListItemAvatar>

        <ListItemText primary={name}/>

        <ListItemSecondaryAction>
          <IconButton edge="end">
            <Send onClick={() => navigate(`/admins/product-units/${id}`)}/>
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>

      <Divider/>

      <Collapse in={open} timeout="auto" unmountOnExit style={{ paddingLeft: 32 }}>
        <ProductUnitsList id={id}/>
      </Collapse>
    </>
  )
}
