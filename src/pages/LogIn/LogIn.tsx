import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link, useHistory } from "react-router-dom";
import "./LogIn.scss";
import Logo from "../../images/Logo_Buchfix.png";
import { inject, observer } from "mobx-react";
import { authStore } from "../../stores/authStore";
import Cookie from "universal-cookie";

import axios from "axios";

import { betterRequests } from "../../helpers/buchfixRequest";

function LogIn() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const history = useHistory();

  const handleLogin = async () => {
    if (!password || !username) return setError(true);

    const loginRes: any = await axios
      .post(process.env.REACT_APP_AUTH_URL + "/authenticate/login", {
        username: username,
        password: password,
      })
      .catch((err) => {
        console.log("versvhcisss");
      });
    const cookie = new Cookie();
    cookie.remove("refreshToken");
    cookie.remove("accessToken");
    cookie.set("refreshToken", loginRes.data.refreshToken);

    cookie.set("accessToken", loginRes.data.accessToken);
    console.log(cookie.get("refreshToken"), cookie.get("accessToken"));

    const user = await betterRequests
      .post(process.env.REACT_APP_API_URL + "/user/getfulldata", {})
      .catch((error) => {
        console.log("error bam user holen", error);
      });
    if (user) {
      authStore.setUser(user.data);
      history.push("/");
    }
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
          type="password"
          required={true}
          error={error}
          onChange={(e) => {
            setError(false);
            setPassword(e.target.value);
          }}
        />
        <p id="alreadyLogIn">
          noch keinen Account?
          <Link to="/signup" id="jetztanmeldenA">
            Jetzt registrieren
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
