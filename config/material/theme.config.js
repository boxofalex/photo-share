import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
    palette: {
      primary: {
        main: '#fff',
        contrastText: '#3F4045',
      },
      secondary: {
        main: '#5F5AA2',
        contrastText: '#fff',
      }
    },
    typography: {
      useNextVariants: true,
    },
  });