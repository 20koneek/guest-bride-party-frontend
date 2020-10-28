import React, { memo } from 'react'
import classNames from 'classnames'
import { ListItem as ListItemUI, withStyles } from '@material-ui/core'
import { styles } from './styles'

export const ListItem = withStyles(styles)(memo<any>(({
    classes: {
      secondaryAction,
      ...classes
    },
    disableGutters,
    ...props
}) => (
    <ListItemUI
        {...props}
        classes={classes}
        disableGutters={disableGutters}
        className={classNames({ [secondaryAction]: disableGutters })}
    />
)))
