import React from "react";
import "./App.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

//pages
import LogIn from "./pages/SignIn/SignIn";

const pages = {
  login: LogIn,
};

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/signin" component={() => <pages.login />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
