import { addActiveCurrency, getCurrencies } from 'constants/manageCurrencies'

const initialState = {
  list: [],
  active: null,
  date: null,
}

function manageCurrencies (state = initialState, action) {
  switch (action.type) {
    case addActiveCurrency.request:
      return { ...state, active: action.which }
    case getCurrencies.request:
      return { ...state, list: action.list, date: action.date }
    default:
      return state
  }
}

export default manageCurrencies