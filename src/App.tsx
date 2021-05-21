import React from "react";
import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { authStore } from "./stores/authStore";
import { tokenStore } from "./stores/tokenStore";

//pages
import Home from "./pages/Home/Home";
import SignUp from "./pages/SignUp/SignUp";
import LogIn from "./pages/LogIn/LogIn";
import Bookview from "./pages/Bookview/Bookview";
import { inject, observer } from "mobx-react";

const pages = {
  signUp: SignUp,
  logIn: LogIn,
  home: Home,
  bookview: Bookview,
};
//if () aodsdaslkflds

//abfrage ? wenn true : wenn false
function App() {
  console.log(authStore.user, tokenStore.refreshToken, tokenStore.accessToken);
  return authStore.user && tokenStore.refreshToken && tokenStore.accessToken ? (
    <div className="App">
      <NavBar></NavBar>
      <Router>
        <Switch>
          <Route exact path="/" component={() => <pages.home />} />
          <Route exact path="/bookview" component={() => <pages.bookview />} />
          <Route path="/" component={() => <Redirect to="/" />} />
        </Switch>
      </Router>
    </div>
  ) : (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/login" component={() => <pages.logIn />} />
          <Route exact path="/signup" component={() => <pages.signUp />} />
          <Route path="/" component={() => <Redirect to="/login" />} />
        </Switch>
      </Router>
    </div>
  );
}

export default inject("authStore", "tokenStore")(observer(App));
