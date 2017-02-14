import { addCurrency } from 'actions/addCurrency';


function mapDispatch(dispatch) {
  return {
    addWelcome: (id) => {
      dispatch(addCurrency(id))
    },
    dispatch
  }
}

function mapState(state) {
  return {
    currency: state.list,
    welcome: state.welcome
  }
}

export {
  mapDispatch,
  mapState,
};
