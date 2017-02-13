import { createStore } from 'redux'
import currencyList from './reducers/currencyList'

const store = createStore(
  currencyList,
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : null
)

export default store