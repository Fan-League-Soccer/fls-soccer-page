import { green } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'

// A custom theme for this app
const theme = createTheme({
  spacing: 4,
  typography: {
    fontFamily: [
      'Lato',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  palette: {
    primary: {
      main: green[500],
    },
  },
})

export default theme
