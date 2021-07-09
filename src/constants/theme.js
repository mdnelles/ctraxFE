import { createMuiTheme } from "@material-ui/core/styles";

const COLOR_PRIMARY_LIGHT = "#3cde98";
const COLOR_PRIMARY_MAIN = "#258f61";
const COLOR_PRIMARY_DARK = "#185e40";
const COLOR_SECONDARY_LIGHT = "#54ff84";
const COLOR_SECONDARY_MAIN = "#3ab55c";
const COLOR_SECONDARY_DARK = "#328549";

const palette = {
   primary: {
      light: COLOR_PRIMARY_LIGHT,
      main: COLOR_PRIMARY_MAIN,
      dark: COLOR_PRIMARY_DARK,
   },
   secondary: {
      light: COLOR_SECONDARY_LIGHT,
      main: COLOR_SECONDARY_MAIN,
      dark: COLOR_SECONDARY_DARK,
   },
};

const breakpoints = {
   keys: ["xs", "sm", "md", "lg", "xl"],
   values: {
      xs: 0,
      sm: 600,
      md: 960,
      semiLg: 1040,
      lg: 1280,
      semiXl: 1650,
      xl: 1920,
   },
};

export const theme = createMuiTheme({
   palette,
   breakpoints,
   typography: {
      fontFamily: "Roboto, sans-serif",
      useNextVariants: true,
      allVariants: {
         color: palette.primary.main,
      },
      button: {
         textTransform: "none",
      },
   },
});

const darkTheme = createMuiTheme({
   palette: {
      type: "dark",
   },
   breakpoints,
   typography: {
      fontFamily: "Roboto, sans-serif",
      useNextVariants: true,
      allVariants: {
         color: palette.primary.main,
      },
      button: {
         textTransform: "none",
      },
   },
});
