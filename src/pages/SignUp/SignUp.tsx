import React, { useState, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios, { AxiosError } from "axios";
import "./SignUp.scss";
import { Link } from "react-router-dom";
// TODO: eingegebenen Daten speichern und in die DB übertragen
//types
import UserType from "../../types/UserType";
import { stringify } from "node:querystring";

function SignIn() {
  const [firstname, setFirstname] = useState<string>(""); // inputs speichern
  const [lastname, setLastname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordRepeat, setPasswordRepeat] = useState<string>("");
  const [recaptchaValid, setRecaptchaValid] = useState<boolean>(false);
  const recaptchaRef: any = React.useRef(null);
  let token: any;
  const user: UserType = {
    username: "patrickcernyy",
    email: "patrick.cerny04@gmail.comm",
    location: {
      city: "Bregenz",
      country: "Österreich",
      number: "1",
      street: "1",
      state: "Vorarlberg",
      zipCode: "6900",
    },
    name: {
      firstName: "Patrick",
      lastName: "Cerny",
    },
    password: "Dönermann123",
  };

  const onSubmitReCaptcha = async (event: any) => {
    event.preventDefault();
    token = await recaptchaRef.current.getValue();
  };
  const checkValideData: () => boolean = () => {
    if (
      firstname &&
      lastname &&
      email &&
      username &&
      password &&
      passwordRepeat &&
      recaptchaValid
    )
      return false;
    return true;
  };
  useEffect(() => {});
  const handleRecapchaChange = () => {
    setRecaptchaValid(true);
  };
  return (
    <div className="main-wrapper-signup">
      <div className="signInContainer">
        <TextField
          className="textField-signin"
          label="Vorname"
          required={true}
          onChange={(e) => {
            //OnChange wenn verändert dann in state speichern
            setFirstname(e.target.value);
          }}
        />
        <TextField
          className="textField-signin"
          label="Zuname"
          required={true}
          onChange={(e) => {
            setLastname(e.target.value);
          }}
        />
        <TextField
          className="textField-signin"
          label="E-Mail"
          required={true}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <TextField
          className="textField-signin"
          label="Benutzername"
          required={true}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <TextField
          className="textField-signin"
          label="Passwort"
          required={true}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <TextField
          className="textField-signin"
          label="Passwort wiederholen"
          required={true}
          onChange={(e) => {
            setPasswordRepeat(e.target.value);
          }}
        />
        <p id="alreadySignUp">
          schon registriert?{" "}
          <Link to="/login" id="jetztanmeldenA">
            Jetzt anmelden
          </Link>
        </p>

        <form
          onSubmit={onSubmitReCaptcha}
          id="formOnSubmit"
          onChange={handleRecapchaChange} //Funktion mitgeben
        >
          <ReCAPTCHA
            sitekey="6LdJPbgaAAAAAMX1THjQk1i-24MelgOvL3SnrOOF"
            hl="de-AT"
            ref={recaptchaRef}
          ></ReCAPTCHA>
          <Button
            color="primary"
            id="buttonSubmit"
            variant="contained"
            disabled={checkValideData()} // Funktion ausführen
          >
            sign in
          </Button>
        </form>
        <span>{firstname}</span>
      </div>
    </div>
  );
}

export default SignIn;
