import { addFollowed, removeFollowed } from 'constants/manageCurrencies'

const initialState = {
  list: []
}

function manageFollowedReducer (state = initialState, action) {
  switch (action.type) {
    case addFollowed.request:
      return { ...state, list: [ ...state.list, action.which ] }
    case removeFollowed.request:
      return {
        ...state, list: [
          ...state.list.slice(0, action.index),
          ...state.list.slice(action.index + 1)
        ]
      }
    default:
      return state
  }
}

export default manageFollowedReducer