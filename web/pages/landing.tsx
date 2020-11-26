import React, { useState } from 'react';
import { SignUpForm } from './LandingPage/SignUp.components'
import client from '../client.js';


export const SignUp = () => {

  const [{username}, setRegisterData] = useState({
    username: '',
  })

  const [error, setError] = useState('')

  const handler = async (event: React.FormEvent) => {
    event.preventDefault();

    const register = {
      _type: 'signupform',
      data: {
        email: username
      }
    }
    const result = await client.create(register);
  };

  return (
    <SignUpForm onSubmit={handler}>
      <label htmlFor="username"> Email </label>
      <input value={username} name="username" type="email" onChange={(event) => setRegisterData({
        username: event.target.value,
      })} />

      <button type="submit"> SignUp </button>
      {error.length > 0 && <p>{error}</p>}
    </SignUpForm>
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
