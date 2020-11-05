import { ListItemIcon, ListItemText } from '@material-ui/core'
import React, { FC, memo } from 'react'
import {
    Circle,
    ListItem,
} from '@ui'
import { Props } from './types'

export const ColorListItem: FC<Props> = memo<Props>(({
    color,
    primary,
    onClick,
    children,
}) => (
    <ListItem
        button={!!onClick}
        onClick={onClick}
    >
        <ListItemIcon>
            <Circle color={color}/>
        </ListItemIcon>

        <ListItemText primary={primary}/>

        {children}
    </ListItem>
))
