import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import { createMemoryHistory, createBrowserHistory } from 'history';

//mount function to get el ref to call render APP on startup
const mount = (el, { onNavigate, defaultHistory }) => {
  const history = defaultHistory || createMemoryHistory();

  if (onNavigate) {
    history.listen(onNavigate);
  }

  ReactDom.render(<App history={history} />, el);

  return {
    onParentNavigate({ pathname: nextPathName }) {
      const { pathname } = history.location;
      if (pathname !== nextPathName) {
        history.push(nextPathName);
      }
    },
  };
};

//check if we are developing app in isolation

if (process.env.NODE_ENV === 'development') {
  //get the div ref
  const root = document.querySelector('#marketing-root');
  //call mount
  if (root) {
    mount(root, { defaultHistory: createBrowserHistory() });
  }
}

export { mount };
