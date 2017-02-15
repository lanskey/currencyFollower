import { addFollowed, removeFollowed } from 'actions/manageCurrencies'
import manageCurrenciesReducer from '../manageFollowed'

describe('manageCurrenciesReducer', () => {
  let state
  beforeEach(() => {
    state = {
      list: [],
    }
  })

  it('returns the initial state', () => {
    expect(manageCurrenciesReducer(undefined, {})).to.eql(state);
  });

  it('should add followed element', () => {
    const fixture = {};
    const expectedResult = { ...state, list: [fixture]}

    expect(manageCurrenciesReducer(state, addFollowed(fixture))).to.eql(expectedResult);
  });

  it('should remove followed element', () => {
    state.list = [1, 2]
    const fixture = 1;
    const expectedResult = { ...state, list: [fixture]}

    expect(manageCurrenciesReducer(state, removeFollowed(fixture))).to.eql(expectedResult);
  });
})

