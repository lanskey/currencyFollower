import { addCurrency, addFollowed, removeFollowed, getCurrencies } from 'actions/manageCurrencies';


function mapDispatch(dispatch) {
  return {
    markActive: (which) => {
      dispatch(addCurrency(which))
    },
    addFollowed: (which) => {
      dispatch(addFollowed(which))
    },
    removeFollowed: (index) => {
      dispatch(removeFollowed(index))
    },
    getCurrencies: (list, date) => {
      dispatch(getCurrencies(list, date))
    },
    dispatch
  }
}

function mapState(state) {
  return {
    currencyList: state.currencies.list,
    active: state.currencies.active,
    followed: state.followed.list
  }
}

export {
  mapDispatch,
  mapState,
};
