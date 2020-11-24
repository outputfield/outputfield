import React from 'react';
import SignUp from './SignUp/SignUpPage';
import Link from 'next/link'

export const Index = () => {
  return (
      <p>
        <Link href="./SignUp/SignUpPage">
          <a> Apply now . </a>
        </Link>
      </p>
  );
};

export default Index;
