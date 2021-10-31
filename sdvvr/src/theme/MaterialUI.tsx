import { createTheme } from '@material-ui/core/styles'


export const darkTheme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#d32f2f',
      // main: '#a82414',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#651fff',
      dark: '#ba000d',
      contrastText: '#000',
    },
    type: "dark",
  },
});
