import React, { FC } from 'react'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import { Props } from './types'

const theme = createMuiTheme({
  palette: {
    primary: { main: '#fe5196' },
    secondary: { main: '#98ffed' },
  },
})

export const Theme: FC<Props> = ({ children }) => (
  <MuiThemeProvider theme={theme}>
    {children}
  </MuiThemeProvider>
)

export default Theme
