import { createMuiTheme } from '@material-ui/core/styles';
import { blue, cyan, deepOrange, green, grey, red } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[900],
    },
    secondary: {
      main: cyan[700],
    },
    error: {
      main: red['A700'],
    },
    warning: {
      main: deepOrange['A700'],
    },
    info: {
      main: blue['A700'],
    },
    success: {
      main: green[600],
    },
    background:{
      default: grey[100],
    },
  },
});

export default theme;