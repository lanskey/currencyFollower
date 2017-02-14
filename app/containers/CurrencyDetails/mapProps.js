import { addCurrency } from 'actions/manageCurrencies';

function mapState(state) {
  console.log(state)
  return {
    active: state.currencies.active
  }
}

export {
  mapState,
};
