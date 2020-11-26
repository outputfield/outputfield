<<<<<<< HEAD
import React, {useEffect} from 'react';
import SignUp from './landing';
import Link from 'next/link'
import Router from 'next/router'
=======
import SignUp from "./SignUp/SignUpPage";
import Link from "next/link";
import { SignUpButton } from "../components/sign-up-button/sign-up-button.component";
>>>>>>> origin/signup-button

export const Index = () => {

  useEffect(() => {
    const {pathname} = Router

    if(pathname == '/' ){
         Router.push('landing');
    }
  }, []);
  /*
  return (
      <p>
        <Link href="./SignUp/SignUpPage">
          <a> Apply now . </a>
        </Link>
      </p>
  );
};
*/
  return (
<<<<<<< HEAD
    null
=======
    <p>
      <Link href="./SignUp/SignUpPage">
        <SignUpButton buttonText="sign up" />
      </Link>
    </p>
>>>>>>> origin/signup-button
  );
};

export default Index;
