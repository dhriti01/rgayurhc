import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { poppins } from "./fonts";

let theme = createTheme({
  typography: {
    fontFamily: poppins.style.fontFamily,
  },
  components: {
    MuiLink: {
      defaultProps: {
        underline: "none",
        color: "#000",
      },
    },

    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === "contained" &&
            ownerState.color === "primary" && {
              backgroundColor: "#00853E",
              color: "#fff",
              padding: "0.765rem 2.33rem",
            }),
        }),
      },
    },
  },
});

theme.typography.mainH3p5 = {
  fontSize: "2.75rem",
  [theme.breakpoints.down("lg")]: {
    fontSize: "2.55rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.833rem",
  },
};

theme.typography.H3p5 = {
  fontSize: "2.5rem",
  [theme.breakpoints.down("lg")]: {
    fontSize: "2.318rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.663rem",
  },
};

theme.typography.H4p5 = {
  fontSize: "1.75rem",
  [theme.breakpoints.down("md")]: {
    fontSize: "1.575rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.367rem",
  },
};

theme.typography.H4pp5 = {
  fontSize: "1.875rem",
  [theme.breakpoints.down("md")]: {
    fontSize: "1.687rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.46rem",
  },
};

theme.typography.H7 = {
  fontSize: "1.125rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.0125rem",
  },
};

theme = responsiveFontSizes(theme);

export default theme;
