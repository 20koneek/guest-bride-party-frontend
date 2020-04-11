import React, { FC } from 'react'
import { Typography, TypographyProps } from '@material-ui/core'

export const PrimaryText: FC<TypographyProps> = ({
    children,
    variant,
    ...props
}) => (
    <Typography
        {...props}
        variant='h6'
        color='primary'
    >
        {children}
    </Typography>
)
