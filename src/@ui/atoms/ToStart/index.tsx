import React, { memo } from 'react'
import { withStyles } from '@material-ui/core'
import { styles } from './styles'
import { Props } from './types'

export const ToStart = withStyles(styles)(memo<Props>(({ children, classes }) => (
    <div className={classes.root}>
        {children}
    </div>
)))
