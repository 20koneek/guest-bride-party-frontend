import React, { FC } from 'react'
import { Fab, FabProps } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { styles } from './styles'

const Button: FC<FabProps> = ({ children, ...props }) => (
    <Fab
        {...props}
        type='submit'
        color="primary"
        variant="extended"
    >
        {children}
    </Fab>
)

export const SubmitButton = withStyles(styles)(Button)
