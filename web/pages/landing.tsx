import React, { useState } from "react";
import axios from "axios";
import { getErrorMessage } from "../api-client/errors";
import { sendSignup, SignupRequest } from "../api-client/signup";
import {
  Input,
  Label,
  Signupbutton,
  SignUpForm,
} from "../components/landingPage";
import styles from "../components/landingPage/index.module.scss";
import { Text } from "../components/text/text.component";
import colors from "../colors";

export default () => {
  /**
  Resembles the landing page.
    */
  const [email, setRegisterData] = useState("");
  const [state, setState] = useState("IDLE");
  const [error, setError] = useState(null);

  const subscribe = async (event: React.FormEvent) => {
    event.preventDefault();
    setState("loading");
    setError(null);

    try {
      const response = await axios.post("/api/signup", { email });
      setState("success");
    } catch (event) {
      setError(getErrorMessage(event));
      setState("error");
    }
  };

  return (
    <div>
      <SignUpForm onSubmit={subscribe}>
        <Label> Sign up for launch updates. </Label>
        <Input
          value={email}
          type="text"
          onChange={(event) =>
            setRegisterData(event.target.value)
          }
        ></Input>
        <Signupbutton>
          <div id="ellipse1" className={styles.ellipse}></div>
          <div id="ellipse2" className={styles.ellipse}></div>
          <div id="signuptext1" className={styles.signuptext}>
            SIGN UP
          </div>
          <div id="signuptext2" className={styles.signuptext}>
            SIGN UP
          </div>
        </Signupbutton>
      </SignUpForm>
    </div>

  )
};
