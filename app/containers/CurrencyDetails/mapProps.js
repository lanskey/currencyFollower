import { addCurrency } from 'actions/manageCurrencies';

function mapState(state) {
  return {
    active: state.currencies.active,
    date: state.currencies.date
  }
}

export {
  mapState,
};
