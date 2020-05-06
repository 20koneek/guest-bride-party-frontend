import React, { memo } from 'react'
import { Props } from './types'
import { Fab, withStyles } from '@material-ui/core'
import { styles } from './styles'

export const NewPostButton = withStyles(styles)(memo<Props>(({ classes }) => (
    <Fab
        color='secondary'
        variant='extended'
        classes={classes}
    >
        Поздравить!
    </Fab>
)))
