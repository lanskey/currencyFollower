import React from 'react';
import ReactDOM from 'react-dom';
import Main from './containers/Main';
import { Provider } from 'react-redux'
import store from './store'

import 'bootstrap/dist/css/bootstrap.css'
import './styles.scss'

// TODO: Create static data structures / components for currencies
// - add reducer for hanlding currencies
// TODO: Create component which display sell / buy prince
// TODO: Create component which contain Currencies
// TODO: Create component which contain input, which will be responsible for adding new currencies
// TODO: Create component which will represent single currency
// TODO: Create container which will display details about current selected currency
// TODO: Make data dynamic
// TODO: install code coverage
// TODO: install eslint with a standartJS

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('root')
);