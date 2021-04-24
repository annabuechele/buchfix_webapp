import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";

function App() {
  const [state, setstate] = React.useState("no nix");
  const recaptchaRef: any = React.useRef(null);
  let token: any;
  const onSubmitReCaptcha = async (event: any) => {
    event.preventDefault();
    token = await recaptchaRef.current.getValue();
    setstate(token);
    await axios.post("http://localhost:42069/recaptcha/verify", {
      token: token,
    });
  };

  return (
    <div className="App">
      <form onSubmit={onSubmitReCaptcha}>
        <ReCAPTCHA
          sitekey="6LdJPbgaAAAAAMX1THjQk1i-24MelgOvL3SnrOOF"
          hl="de-AT"
          ref={recaptchaRef}
        ></ReCAPTCHA>
        <button type="submit">submit</button>
      </form>
      <span>{state}</span>
    </div>
  );
}

export default App;
