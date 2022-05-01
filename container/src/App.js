import React, { Suspense, useState, useEffect } from 'react';
import { Router, Redirect, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import {
  createGenerateClassName,
  StylesProvider,
} from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Header from './components/Header';

const MarketingApp = React.lazy(() => import('./components/MarketingApp'));
const AuthApp = React.lazy(() => import('./components/AuthApp'));
const DashboardApp = React.lazy(() => import('./components/DashboardApp'));
const history = createBrowserHistory();

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const generateClassName = createGenerateClassName({
    productionPrefix: 'co',
  });

  useEffect(() => {
    if (isSignedIn) {
      history.push('/dashboard');
    }
  }, [isSignedIn]);

  return (
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <Header
          onSignOut={() => setIsSignedIn(false)}
          isSignedIn={isSignedIn}
        />
        <Suspense fallback={<LinearProgress />}>
          <Switch>
            <Route path='/auth'>
              <AuthApp onSignIn={() => setIsSignedIn(true)} />
            </Route>
            <Route path='/dashboard'>
              {!isSignedIn && <Redirect to='/' />}
              <DashboardApp />
            </Route>
            <Route path='/v2'>
              <Redirect to='/v2/index.html' />
            </Route>
            <Route path='/' component={MarketingApp} />
          </Switch>
        </Suspense>
      </Router>
    </StylesProvider>
  );
};
