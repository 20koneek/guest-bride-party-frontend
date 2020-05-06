import React, { memo } from 'react'
import { Typography, withStyles } from '@material-ui/core'
import { Column } from '@ui'
import { Props } from './types'
import { styles } from './styles'

export const ContentColumn = withStyles(styles)(memo<Props>(({
    children,
    title,
    classes,
    variant = 'h4',
    color = 'primary',
}) => (
    <Column className={classes.root}>
        <Typography variant={variant} color={color}>
            {title}
        </Typography>

        {children}
    </Column>
)))
