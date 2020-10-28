import React, { memo } from 'react'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core'
import { styles } from './styles'
import { Props } from './types'

export const Circle = withStyles(styles)(memo<Props>(({
    color,
    classes,
    size = 'small',
    children,
}) => (
    <div
        className={classNames(
            classes.circle,
            classes[size],
        )}
        style={{ backgroundColor: color }}
    >
        {children}
    </div>
)))
