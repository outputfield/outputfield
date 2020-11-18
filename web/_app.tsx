import React from 'react';
//import { Route, Switch } from 'react-router-dom';
import SignUp from './SignUp/SignUpPage';

/*
  TO DO: This _app.tsx has to be set up properly
  as it is the root of nextjs.

  It also has to be placed in the pages folder.
*/

export const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={SignUp} />
      </Switch>
    </div>
  );
};

export default App;
