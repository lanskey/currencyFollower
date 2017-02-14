import { addCurrency, addFollowed } from '../manageCurrencies'
import * as constants from 'constants/manageCurrencies'

describe('addCurrency Action', () => {
  let fixture
  beforeEach(() => {
    fixture = {}
  })

  it('should add requested currency', () => {
    const expected = {
      type: constants.addActiveCurrency.request,
      which: fixture
    }

    expect(addCurrency(fixture)).to.eql(expected)
  })

  it('should remove requested currency', () => {
    const expected = {
      type: constants.addFollowed.request,
      which: fixture
    }

    expect(addFollowed(fixture)).to.eql(expected)
  })
  
})



