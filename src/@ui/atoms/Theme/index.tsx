import React, { FC } from 'react'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import { Props } from './types'
import { CssBaseline } from '@material-ui/core'

const theme = createMuiTheme({
    palette: {
        primary: { main: '#fe5196' },
        secondary: { main: '#98ffed' },
    },
})

export const Theme: FC<Props> = ({ children }) => (
    <MuiThemeProvider theme={theme}>
        <CssBaseline/>
        {children}
    </MuiThemeProvider>
)
