import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeOptions } from "@material-ui/core/styles/createMuiTheme";

export const theme = createMuiTheme({
   palette: {
      type: "dark",
      primary: {
         main: "#64b5f6",
      },
      secondary: {
         main: "#f50057",
      },
      background: {
         paper: "#424242",
         default: "#303030",
      },
   },
});
