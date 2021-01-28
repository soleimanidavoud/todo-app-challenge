import { createMuiTheme } from "@material-ui/core/styles";

let theme = createMuiTheme({
  palette: {
    type: "light",
    background: {
      default: "#ffffff",
    },
    primary: {
      main: "#1775b9",
    },
    secondary: {
      main: "#616161",
    },
  },
  direction: "rtl",
  typography: {
    fontFamily: "IRANSans",
  },
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        boxShadow: "none",
        // backgroundColor: "#fff",
      },
    },
    MuiButton: {
      // textPrimary: { color: grey["600"] },
      // root: { borderRadius: 25 },
      contained: {
        boxShadow: "none",
        "&:hover": { boxShadow: "none" },
        "&:active": { boxShadow: "none" },
      },
    },
    MuiToolbar: {
      gutters: {
        paddingLeft: 30,
        paddingRight: 30,
        "@media (min-width:600px)": { paddingRight: 30, paddingLeft: 30 },
      },
    },
    MuiPaper: {
      rounded: { borderRadius: 6 },
    },
    MuiChip: {
      root: { borderRadius: 6 },
    },
  },
});

export default theme;
