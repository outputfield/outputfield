import React from 'react';
import type { BaseApp } from 'next/app'
import client from '../client'

import '../styles/styles.global.scss';
//import SignUp from './SignUp/SignUpPage';

/*
  TO DO: This _app.tsx has to be set up properly
  as it is the root of nextjs.

  It also has to be placed in the pages folder.
*/

function App({ Component, pageProps }: BaseApp) {
  return (
    <Component {...pageProps} />
  );
};

export default App;
