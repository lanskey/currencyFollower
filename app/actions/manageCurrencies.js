import { addActiveCurrency } from 'constants/manageCurrencies'

export function addCurrency(text) {
  return {
    type: addActiveCurrency.request,
    text
  }
}
