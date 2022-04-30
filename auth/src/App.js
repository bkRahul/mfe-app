import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
import SignIn from './components/Signin';
import Signup from './components/Signup';

export default ({ history }) => {
  const generateClassName = createGenerateClassName({
    productionPrefix: 'au',
  });

  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route exact path='/auth/signin' component={SignIn} />
            <Route exact path='/auth/signup' component={Signup} />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
