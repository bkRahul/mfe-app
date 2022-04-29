import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {
  createGenerateClassName,
  StylesProvider,
} from '@material-ui/core/styles';
import Header from './components/Header';
import MarketingApp from './components/MarketingApp';

export default () => {
  const generateClassName = createGenerateClassName({
    productionPrefix: 'co',
  });

  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <Header />
        <MarketingApp />
      </BrowserRouter>
    </StylesProvider>
  );
};
