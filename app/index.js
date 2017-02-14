import React from 'react';
import ReactDOM from 'react-dom';
import TestingComponent from './containers/TestingComponent.js';
import { Provider } from 'react-redux'
import store from './store'

import './styles.scss'

// TODO: Add styles (sass)
// TODO: Create static data structures for currencies
// TODO: Create component which display sell / buy prince
// TODO: Create component which contain Currencies
// TODO: Create component which contain input, which will be responsible for adding new currencies
// TODO: Create component which will represent single currency
// TODO: Create container which will display details about current selected currency

ReactDOM.render(
  <Provider store={store}>
    <TestingComponent />
  </Provider>,
  document.getElementById('root')
);