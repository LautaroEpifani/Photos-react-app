import { createTheme } from "@mui/material";

const theme = createTheme({
  components: {
    MuiInput: {
      styleOverrides: {
        underline: {
          "&:not(.Mui-disabled):before": {
            borderBottom: "none",
          },
          "&:hover:not(.Mui-disabled):before": {
            borderBottom: "none",
          },
          "&:after": {
            borderBottom: "none",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "#79919B",
          },
        },
      },
    },
  },
  typography: {
    h1: {
      fontFamily: ["IM Fell Great Primer", "serif"].join(","),
    },
    fontFamily: ["Raleway", "sans-serif"].join(","),
  },
});

export default theme;