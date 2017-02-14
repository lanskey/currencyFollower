import { addCurrency } from 'actions/manageCurrencies';


function mapDispatch(dispatch) {
  return {
    markActive: (which) => {
      dispatch(addCurrency(which))
    },
    dispatch
  }
}

function mapState(state) {
  return {
    currencyList: state.list,
    active: state.active
  }
}

export {
  mapDispatch,
  mapState,
};
