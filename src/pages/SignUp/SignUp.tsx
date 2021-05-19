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

function SignIn() {
  const [firstname, setFirstname] = useState<string>(""); // inputs speichern
  const [lastname, setLastname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordRepeat, setPasswordRepeat] = useState<string>("");
  const [recaptchaValid, setRecaptchaValid] = useState<boolean>(false);
  const [formToRender, setformToRender] = useState<any>(null);
  const [street, setStreet] = useState<string>("");
  const [housenumber, setHousenumber] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [postalcode, setPostalcode] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [step, setStep] = useState<number>(0);
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
  const handleRecapchaChange = () => {
    setRecaptchaValid(true);
  };
  const checkLocationData: () => boolean = () => {
    if (street && housenumber && city && postalcode && state) return false;
    return true;
  };
  // const handleSubmit = ()=>{
  //   const user:UserType={email:email, }
  // }
  const setStepZero = () => {
    setStep(0);
  };
  const setStepOne = () => {
    setStep(1);
  };

  useEffect(() => {
    if (step === 0)
      setformToRender(
        <>
          <TextField
            className="textField-signin"
            label="Straße"
            required={true}
            onChange={(e) => {
              setStreet(e.target.value);
            }}
          />
          <TextField
            className="textField-signin"
            label="Hausnummer"
            required={true}
            onChange={(e) => {
              setHousenumber(e.target.value);
            }}
          />
          <TextField
            className="textField-signin"
            label="Ort"
            required={true}
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
          <TextField
            className="textField-signin"
            label="PLZ"
            required={true}
            onChange={(e) => {
              setPostalcode(e.target.value);
            }}
          />
          <TextField
            className="textField-signin"
            label="Land"
            required={true}
            onChange={(e) => {
              setState(e.target.value);
            }}
          />
          <Button
            color="primary"
            id="buttonNext"
            variant="contained"
            disabled={checkLocationData()}
            onClick={setStepOne} // Funktion ausführen
          >
            weiter
          </Button>
        </>
      );
    else
      setformToRender(
        <>
          <TextField
            className="textField-signin"
            label="Vorname"
            value={firstname}
            required={true}
            onChange={(e) => {
              //OnChange wenn verändert dann in state speichern
              setFirstname(e.target.value);
            }}
          />
          <TextField
            className="textField-signin"
            value={lastname}
            label="Zuname"
            required={true}
            onChange={(e) => {
              setLastname(e.target.value);
            }}
          />
          <TextField
            className="textField-signin"
            value={email}
            label="E-Mail"
            required={true}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <TextField
            className="textField-signin"
            value={username}
            label="Benutzername"
            required={true}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <TextField
            className="textField-signin"
            value={password}
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
            value={passwordRepeat}
          />
          <p id="alreadySignUp">
            schon registriert?{" "}
            <Link to="/login" id="jetztanmeldenA">
              Jetzt anmelden
            </Link>
          </p>

          <form onSubmit={onSubmitReCaptcha} id="formOnSubmit">
            <ReCAPTCHA
              sitekey="6LdJPbgaAAAAAMX1THjQk1i-24MelgOvL3SnrOOF"
              onChange={handleRecapchaChange} //Funktion mitgeben
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
        </>
      );

    return () => {};
  }, []);

  // switch (step) {
  //   case 1:
  //     setformToRender(
  //       <>
  //         <TextField
  //           className="textField-signin"
  //           label="Vorname"
  //           value={firstname}
  //           required={true}
  //           onChange={(e) => {
  //             //OnChange wenn verändert dann in state speichern
  //             setFirstname(e.target.value);
  //           }}
  //         />
  //         <TextField
  //           className="textField-signin"
  //           value={lastname}
  //           label="Zuname"
  //           required={true}
  //           onChange={(e) => {
  //             setLastname(e.target.value);
  //           }}
  //         />
  //         <TextField
  //           className="textField-signin"
  //           value={email}
  //           label="E-Mail"
  //           required={true}
  //           onChange={(e) => {
  //             setEmail(e.target.value);
  //           }}
  //         />
  //         <TextField
  //           className="textField-signin"
  //           value={username}
  //           label="Benutzername"
  //           required={true}
  //           onChange={(e) => {
  //             setUsername(e.target.value);
  //           }}
  //         />
  //         <TextField
  //           className="textField-signin"
  //           value={password}
  //           label="Passwort"
  //           required={true}
  //           onChange={(e) => {
  //             setPassword(e.target.value);
  //           }}
  //         />
  //         <TextField
  //           className="textField-signin"
  //           label="Passwort wiederholen"
  //           required={true}
  //           onChange={(e) => {
  //             setPasswordRepeat(e.target.value);
  //           }}
  //           value={passwordRepeat}
  //         />
  //         <p id="alreadySignUp">
  //           schon registriert?{" "}
  //           <Link to="/login" id="jetztanmeldenA">
  //             Jetzt anmelden
  //           </Link>
  //         </p>

  //         <form onSubmit={onSubmitReCaptcha} id="formOnSubmit">
  //           <ReCAPTCHA
  //             sitekey="6LdJPbgaAAAAAMX1THjQk1i-24MelgOvL3SnrOOF"
  //             onChange={handleRecapchaChange} //Funktion mitgeben
  //             hl="de-AT"
  //             ref={recaptchaRef}
  //           ></ReCAPTCHA>
  //           <Button
  //             color="primary"
  //             id="buttonSubmit"
  //             variant="contained"
  //             disabled={checkValideData()} // Funktion ausführen
  //           >
  //             sign in
  //           </Button>
  //         </form>
  //       </>
  //     );
  //     break;

  //   case 0:
  //     setformToRender(
  //       <>
  //         <TextField
  //           className="textField-signin"
  //           label="Straße"
  //           required={true}
  //           onChange={(e) => {}}
  //         />
  //         <TextField
  //           className="textField-signin"
  //           label="Hausnummer"
  //           required={true}
  //           onChange={(e) => {}}
  //         />
  //         <TextField
  //           className="textField-signin"
  //           label="Ort"
  //           required={true}
  //           onChange={(e) => {}}
  //         />
  //         <TextField
  //           className="textField-signin"
  //           label="PLZ"
  //           required={true}
  //           onChange={(e) => {}}
  //         />
  //         <TextField
  //           className="textField-signin"
  //           label="Land"
  //           required={true}
  //           onChange={(e) => {}}
  //         />
  //         <Button
  //           color="primary"
  //           id="buttonNext"
  //           variant="contained"
  //           disabled={checkLocationData()}
  //           onClick={setStepOne} // Funktion ausführen
  //         >
  //           weiter
  //         </Button>
  //       </>
  //     );
  //     break;
  // }

  return (
    <div className="main-wrapper-signup">
      <div className="signInContainer">{formToRender}</div>
      <button onClick={setStepOne}> nach vorn</button>
    </div>
  );
}

export default SignIn;
