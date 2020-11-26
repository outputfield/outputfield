import React, {useEffect} from 'react';
import SignUp from './landing';
import Link from 'next/link'
import Router from 'next/router'
import { SignUpButton } from "../components/sign-up-button/sign-up-button.component";

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
    null
  );
};

export default Index;
