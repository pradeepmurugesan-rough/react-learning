import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import configureStore from './store/configureStore';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { syncHistoryWithStore } from 'react-router-redux';
import '../node_modules/toastr/build/toastr.min.css';
import 'react-block-ui/style.css';

const store = configureStore();

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>, document.getElementById('app')
);




