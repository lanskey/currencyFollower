import { createStore, combineReducers } from 'redux'
import currencies from 'reducers/manageCurrencies'
import followed from 'reducers/manageFollowed'
import { loadingState, saveState } from 'services/localStorage'

const reducers = combineReducers({
    currencies,
    followed,
  }
)

const persistedState = loadingState()
const store = createStore(
  reducers,
  persistedState,
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : null,
)

store.subscribe(() => {
  saveState(store.getState())
})

export default store