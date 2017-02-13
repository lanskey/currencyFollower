import currencyListReducer from '../currencyList'
import { addCurrency } from '../../actions/addCurrency'

describe('currencyListReducer', () => {
  let state
  beforeEach(() => {
    state = {
      list: ['test', 'test2']
    }
  })

  it('returns the initial state', () => {
    expect(currencyListReducer(undefined, {})).to.eql(state);
  });

  it('should add/change value of state.welcome to expected', () => {
    const fixture = 'test';
    const expectedResult = { ...state, welcome: fixture }

    expect(currencyListReducer(state, addCurrency(fixture))).to.eql(expectedResult);
  });
})

