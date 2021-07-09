import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CssBaseline } from "@material-ui/core";
import "typeface-roboto";
import { theme } from "./constants/theme";
import { MuiThemeProvider } from "@material-ui/core/styles";
//import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./redux/store.js";

ReactDOM.render(
   <MuiThemeProvider theme={theme}>
      <Provider store={store}>
         <CssBaseline />
         <App />
      </Provider>
   </MuiThemeProvider>,
   document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
