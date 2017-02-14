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
