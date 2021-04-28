import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import axios, { AxiosError } from "axios";

//types
import UserType from "../../types/UserType";

function SignIn() {
  const [state, setstate] = React.useState<any>("no nix");
  const recaptchaRef: any = React.useRef(null);
  let token: any;
  const user: UserType = {
    username: "patrickcerny",
    email: "patrick.cerny04@gmail.com",
    location: {
      city: "Bregenz",
      country: "Österreich",
      number: "1",
      street: null,
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

    const result: any = await axios
      .post("http://localhost:8080/user/new", {
        reCaptchaToken: token,
        user: user,
      })
      .catch((err: AxiosError) => {
        setstate(err.message);
      });
    if (result) {
      setstate(result.data);
    }
  };
  return (
    <div>
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

export default SignIn;
