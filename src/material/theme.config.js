import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#fff",
      contrastText: "#3F4045",
    },
    secondary: {
      main: "#5F5AA2",
      contrastText: "#fff",
    },
    text: {
      primary: "#3F4045",
      secondary: "#ffffff",
      third: "#413F54",
    },
  },
  typography: {
    useNextVariants: true,
  },
  overrides: {
    MuiTypography: {
      h1: {
        fontSize: "2rem",
        fontWeight: 500,
        letterSpacing: "normal",
      },
      h2: {
        fontSize: "1.5rem",
        fontWeight: 500,
        letterSpacing: "normal",
      },
      h3: {
        fontSize: "1.125rem",
        fontWeight: 500,
        letterSpacing: "normal",
      },
      h4: {
        fontSize: "1rem",
        fontWeight: 500,
        letterSpacing: "normal",
      },
      body1: {
        fontSize: "1rem",
        fontWeight: 300,
        letterSpacing: "normal",
      },
      body2: {
        fontSize: "0.8rem",
        fontWeight: 300,
        letterSpacing: "normal",
      },
    },
  },
});

export default theme;
