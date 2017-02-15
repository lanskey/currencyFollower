import { addCurrency, getCurrencies } from 'actions/manageCurrencies'
import manageCurrenciesReducer from '../manageCurrencies'

describe('manageCurrenciesReducer', () => {
  let state
  beforeEach(() => {
    state = {
      list: [],
      active: null,
      date: null
    }
  })

  it('returns the initial state', () => {
    expect(manageCurrenciesReducer(undefined, {})).to.eql(state);
  });

  it('should add currency', () => {
    const fixture = {};
    const expectedResult = { ...state, active: fixture }

    expect(manageCurrenciesReducer(state, addCurrency(fixture))).to.eql(expectedResult);
  });

  it('should set currencyList, date', () => {
    const fixture = {};
    const expectedResult = { ...state, list: fixture, date: fixture }

    expect(manageCurrenciesReducer(state, getCurrencies(fixture, fixture))).to.eql(expectedResult);
  });
})

