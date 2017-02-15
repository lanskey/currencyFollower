import { addFollowed } from 'actions/manageCurrencies';

function mapDispatch(dispatch) {
  return {
    markActive: (which) => {
      dispatch(addFollowed(which))
    },
    dispatch
  }
}

function mapState(state) {
  return {
    date: state.currencies.date,
    followed: state.followed.list
  }
}

export {
  mapState,
  mapDispatch,
};
