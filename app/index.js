import React from 'react';
import ReactDOM from 'react-dom';
import Main from './containers/Main';
import { Provider } from 'react-redux'
import store from './store'

import 'bootstrap/dist/css/bootstrap.css'
import './styles.scss'

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('root')
);