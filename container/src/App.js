import React, { Suspense, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  createGenerateClassName,
  StylesProvider,
} from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Header from './components/Header';

const MarketingApp = React.lazy(() => import('./components/MarketingApp'));
const AuthApp = React.lazy(() => import('./components/AuthApp'));

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const generateClassName = createGenerateClassName({
    productionPrefix: 'co',
  });

  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <Header
          onSignOut={() => setIsSignedIn(false)}
          isSignedIn={isSignedIn}
        />
        <Suspense fallback={<LinearProgress />}>
          <Switch>
            <Route path='/auth'>
              <AuthApp onSignIn={() => setIsSignedIn(true)} />
            </Route>
            <Route path='/'>
              <MarketingApp />
            </Route>
          </Switch>
        </Suspense>
      </BrowserRouter>
    </StylesProvider>
  );
};
