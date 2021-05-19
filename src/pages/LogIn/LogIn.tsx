import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import "./LogIn.scss";
import Logo from "../../images/Logo_Buchfix.png";
import { inject, observer } from "mobx-react";
import { authStore } from "../../stores/authStore";
import axios from "axios";
import { betterRequests } from "../../helpers/buchfixRequest";

function LogIn() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const handleLogin = async () => {
    if (!password || !username) return setError(true);
    const loginRes = axios
      .post("https://auth.buchfix.at/authenticate/login", {
        username: username,
        password: password,
      })
      .catch((err) => {
        console.log("versvhcisss");
      });

    betterRequests.get("");
  };
  return (
    <div className="main-wrapper-login">
      <div className="logInContainer">
        <img id="Logo_image" src={Logo} alt="" />
        <TextField
          className="textField"
          label="Benutzername"
          required={true}
          error={error}
          onChange={(e) => {
            setError(false);
            //OnChange wenn verändert dann in state speichern
            setUsername(e.target.value);
          }}
        />
        <TextField
          className="textField"
          label="Passwort"
          required={true}
          error={error}
          onChange={(e) => {
            setError(false);
            setPassword(e.target.value);
          }}
        />
        <p id="alreadyLogIn">
          noch keinen Account?
          <Link to="/login" id="jetztanmeldenA">
            Jetzt anmelden
          </Link>
        </p>
        <Button
          color="primary"
          id="buttonSubmit"
          variant="contained"
          onClick={handleLogin}
        >
          log in
        </Button>
      </div>
    </div>
  );
}

export default inject("authStore")(observer(LogIn));
