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

//pages
import Home from "./pages/Home/Home";
import SignUp from "./pages/SignUp/SignUp";
import LogIn from "./pages/LogIn/LogIn";
import Bookview from "./pages/Bookview/Bookview";
import Donation from "./pages/Donation/Donation";
import { inject, observer } from "mobx-react";

const pages = {
  signUp: SignUp,
  logIn: LogIn,
  home: Home,
  bookview: Bookview,
  donation: Donation,
};
//if () aodsdaslkflds

//abfrage ? wenn true : wenn false
function App() {
  console.log(authStore.user, authStore.refreshToken, authStore.accessToken);
  return authStore.user && authStore.refreshToken && authStore.accessToken ? (
    <div className="App">
      <NavBar></NavBar>
      <Switch>
        <Route exact path="/bookview" component={() => <pages.bookview />} />
        <Route exact path="/" component={() => <pages.home />} />
        <Route exact path="/donation" component={() => <pages.donation />} />
        <Route path="/" component={() => <Redirect to="/" />} />
      </Switch>
    </div>
  ) : (
    <div className="App">
      <Switch>
        <Route exact path="/login" component={() => <pages.logIn />} />
        <Route exact path="/signup" component={() => <pages.signUp />} />
        <Route path="/" component={() => <Redirect to="/login" />} />
      </Switch>
    </div>
  );
}

export default inject("authStore")(observer(App));
