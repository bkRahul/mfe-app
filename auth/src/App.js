import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
import SignIn from './components/Signin';
import Signup from './components/Signup';

export default ({ history, onSignIn }) => {
  const generateClassName = createGenerateClassName({
    productionPrefix: 'au',
  });

  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route exact path='/auth/signin'>
              <SignIn onSignIn={onSignIn} />
            </Route>
            <Route exact path='/auth/signup'>
              <Signup onSignIn={onSignIn} />
            </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
