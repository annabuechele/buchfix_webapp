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
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import EyeOn from "./pages/EyeOn/EyeOn";
import { inject, observer } from "mobx-react";

const pages = {
  signUp: SignUp,
  logIn: LogIn,
  home: Home,
  bookview: Bookview,
  donation: Donation,
  shoppingcart: ShoppingCart,
  eyeon: EyeOn,
};
//if () aodsdaslkflds

//abfrage ? wenn true : wenn false
function App() {
  return authStore.user && authStore.refreshToken && authStore.accessToken ? (
    <div className="App">
      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/bookview" component={() => <pages.bookview />} />
          <Route exact path="/" component={() => <pages.home />} />
          <Route exact path="/donation" component={() => <pages.donation />} />
          <Route
            exact
            path="/shoppingcart"
            component={() => <pages.shoppingcart />}
          />
          <Route exact path="/EyeOn" component={() => <pages.eyeon />} />
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

export default inject("authStore")(observer(App));
