import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import "./LogIn.scss";
import Logo from "../../images/Logo_Buchfix.png";

function LogIn() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  return (
    <div className="main-wrapper-login">
      <div className="logInContainer">
        <img id="Logo_image" src={Logo} alt="" />
        <TextField
          className="textField"
          label="Benutzername"
          required={true}
          onChange={(e) => {
            //OnChange wenn verändert dann in state speichern
            setUsername(e.target.value);
          }}
        />
        <TextField
          className="textField"
          label="Passwort"
          required={true}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <p id="alreadyLogIn">
          noch keinen Account?
          <Link to="/login" id="jetztanmeldenA">
            Jetzt anmelden
          </Link>
        </p>
        <Button color="primary" id="buttonSubmit" variant="contained">
          log in
        </Button>
      </div>
    </div>
  );
}

export default LogIn;
