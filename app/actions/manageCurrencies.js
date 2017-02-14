import { addActiveCurrency, removeActiveCurrency } from 'constants/manageCurrencies'

export function addCurrency(which) {
  return {
    type: addActiveCurrency.request,
    which
  }
}

export function removeCurrency(which) {
  return {
    type: removeActiveCurrency.request,
    which
  }
}
