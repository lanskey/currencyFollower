/* 
 ./client/index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
import TestingComponent from './components/TestingComponent.js';
import currencyList from './reducers/currencyList'

// Redux
import { Provider } from 'react-redux'
import { createStore } from 'redux'
let store = createStore(
  currencyList,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store}>
    <TestingComponent />
  </Provider>,
  document.getElementById('root')
);