const initialState = {
  list: ['test', 'test2']
}

function currencyList(state = initialState, action) {
  switch (action.type) {
    case 'TEST':
      return Object.assign({}, state, {
        welcome: action.text
      })
    default:
      return state
  }
}

export default currencyList