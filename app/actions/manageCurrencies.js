import * as constants from 'constants/manageCurrencies'

export function addCurrency(which) {
  return {
    type: constants.addActiveCurrency.request,
    which
  }
}

export function addFollowed(which) {
  return {
    type: constants.addFollowed.request,
    which
  }
}

export function removeFollowed(index) {
  return {
    type: constants.removeFollowed.request,
    index
  }
}

export function getCurrencies(list, date) {
  return {
    type: constants.getCurrencies.request,
    list,
    date
  }
}
