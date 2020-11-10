import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignUp from './pages/SignUp/SignUpPage';

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
