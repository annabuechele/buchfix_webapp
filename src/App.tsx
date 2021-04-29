import React from "react";
import "./App.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

//pages
import Home from "./pages/Home/Home";
import SignUp from "./pages/SignUp/SignUp";
import LogIn from "./pages/LogIn/LogIn";

const pages = {
  signUp: SignUp,
  logIn: LogIn,
  home: Home,
};

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={() => <pages.home />} />
          <Route exact path="/login" component={() => <pages.logIn />} />
          <Route exact path="/signin" component={() => <pages.signUp />} />
          <Route path="/" component={() => <Redirect to="/" />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
