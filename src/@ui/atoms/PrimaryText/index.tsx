import React, { FC } from 'react'
import { Typography, TypographyProps } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const Component: FC<TypographyProps> = ({
    children,
    variant,
    ...props
}) => (
    <Typography
        variant={variant ?? 'h6'}
        {...props}
    >
        {children}
    </Typography>
)

export const PrimaryText = withStyles(({ palette }) => ({
    root: {
        color: palette.primary.main,
    },
}))(Component)
