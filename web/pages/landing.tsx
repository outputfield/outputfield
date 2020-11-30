import React, { useState } from "react";
import { getErrorMessage } from "../api-client/errors";
import { sendSignup, SignupRequest } from "../api-client/signup";
import { SignUpForm, Label, Input, Signupbutton } from "../components/LandingPage/index.ts";
import styles from '../components/LandingPage/index.module.scss';

//TRY
//import Signup from '../components/sections/signup.tsx';

export const SignUp = () => {
  const [{ username }, setRegisterData] = useState({
    username: "",
  });

  const [error, setError] = useState("");

  const handler = async (event: React.FormEvent) => {
    event.preventDefault();

    const signupRequest: SignupRequest = {
      email: username,
    };

    try {
      const signupResponse = await sendSignup(signupRequest);
      console.log("signup response", signupResponse);
    } catch (e) {
      setError(getErrorMessage(e));
    }
  };

  return (
    <div>
      <SignUpForm onSubmit={handler}>
        <Label htmlFor="username"> Sign up for launch updates. </Label>
        <Input value={username}
                   name="username"
                   type="email"
                   onChange={(event) => setRegisterData({
                     username: event.target.value,
                   })}>
        </Input>
        <Signupbutton type="submit">
          <div id="ellipse1" className={styles.ellipse}></div>
    			<div id="ellipse2" className={styles.ellipse}></div>
    			<div id="signuptext1" className={styles.signuptext}>SIGN UP</div>
    			<div id="signuptext2" className={styles.signuptext}>SIGN UP</div>
        </Signupbutton>
        {error.length > 0 && <p>{error}</p>}
      </SignUpForm>
  </div>
  );
};

export default SignUp;

/*
export const SignUp = () => {

  const [{username, password, repeatPassword}, setRegisterData] = useState({
    username: '',
    password: '',
    repeatPassword: ''
  })

  const [error, setError] = useState('')

  const register = (event: React.FormEvent) => {
    event.preventDefault();
    if(password == repeatPassword) {
      // perform API call
    } else {
      setError('passwords do not match.')
    }
  }
  return (
    <SignUpForm onSubmit={register}>
      <label htmlFor="username">Username</label>
      <input value={username} name="username" onChange={(event) => setRegisterData({
        username: event.target.value,
        password,
        repeatPassword
      })} />

      <label htmlFor="password">Password</label>
      <input value={password} name="password" type="password" onChange={(event) => setRegisterData({
        username,
        password: event.target.value,
        repeatPassword
      })} />

      <label htmlFor="repeatPassword">Repeat Password</label>
      <input value={repeatPassword} name="repeatPassword" type="password" onChange={(event) => setRegisterData({
        username,
        password,
        repeatPassword: event.target.value
      })} />
      <button type="submit"> Register </button>
      {error.length > 0 && <p>{error}</p>}
    </SignUpForm>
  );
};
*/
