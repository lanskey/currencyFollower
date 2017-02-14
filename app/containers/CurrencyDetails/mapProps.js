import { addCurrency } from 'actions/manageCurrencies';

function mapState(state) {
  return {
    active: state.list[state.active]
  }
}

export {
  mapState,
};
