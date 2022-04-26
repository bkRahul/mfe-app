import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

//mount function to get el ref to call render APP on startup
const mount = el => {
  ReactDom.render(<App />, el);
};

//check if we are developing app in isolation

if (process.env.NODE_ENV === 'development') {
  //get the div ref
  const root = document.querySelector('#marketing-root');
  //call mount
  if (root) {
    mount(root);
  }
}

export { mount };
