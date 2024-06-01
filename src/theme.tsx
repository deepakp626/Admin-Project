import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#4F56D3',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    text:{
      primary: "#878787",
    }
  },
  // tr: {
  //   background: "#f1f1f1",
  //   '&:hover': {
  //      background: "#f00",
  //   }
});

export default theme;