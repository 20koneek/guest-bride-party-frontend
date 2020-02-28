import React, { FC } from 'react'
import Typography from '@material-ui/core/Typography'
import { WithStyles, withStyles } from '@material-ui/core/styles'

const Component: FC<WithStyles<'root'>> = ({
    children,
    classes,
}) => (
    <Typography
        variant="h6"
        className={classes.root}
    >
        {children}
    </Typography>
)

export const PrimaryText = withStyles(({ palette }) => ({
    root: {
        color: palette.primary.main,
    },
}))(Component)
