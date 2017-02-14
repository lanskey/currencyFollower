import { createStore } from 'redux'
import manageCurrencies from 'reducers/manageCurrencies'

const store = createStore(
  manageCurrencies,
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : null
)

export default store