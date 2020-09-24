import { createMuiTheme } from '@material-ui/core/styles';
import { blue, cyan, deepOrange, green, grey, red } from '@material-ui/core/colors';

if (!localStorage.getItem("theme")) localStorage.setItem("theme", "#0d47a1");

const theme = createMuiTheme({
  palette: {
    primary: {
      main: localStorage.getItem("theme"),
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
    background: {
      default: grey[100],
    },
  },
});

export default theme;