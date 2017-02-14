import { createStore, combineReducers } from 'redux'
import currencies from 'reducers/manageCurrencies'
import followed from 'reducers/manageFollowed'

const reducers = combineReducers({
    currencies,
    followed
  }
)

const store = createStore(
  reducers,
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : null
)

export default store