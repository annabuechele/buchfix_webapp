import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import { Provider as StoreProvider } from "mobx-react";
import { authStore } from "./stores/authStore";
import { cartStore } from "./stores/cartStore";
import { Router } from "@material-ui/icons";

require("dotenv").config();

let theme = createMuiTheme({
  typography: { fontSize: 12, fontFamily: "Roboto" },
  palette: {
    primary: {
      main: "#442220",
      light: "#633735",
      dark: "#290E0D",
    },
    secondary: {
      main: "#426B69",
      light: "#547D7A",
      dark: "#234E4C",
    },
    error: {
      main: "#E10404",
    },
  },
});

const stores = {
  authStore,
  cartStore,
};

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider {...stores}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
