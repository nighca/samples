import React from 'react';
import { render, hydrate } from 'react-dom';
import { useStrict } from 'mobx';
import createBrowserHistory from 'history/createBrowserHistory';
import App from './views/App';
import routerStore from './stores/router';
import ssrStore from './stores/ssr';

useStrict(true);
const history = createBrowserHistory();
routerStore.setHistory(history);

(ssrStore.stateLoaded ? hydrate : render)(
  <App />,
  document.getElementById('app')
);
