import { addCurrency, removeCurrency } from '../manageCurrencies'
import { addActiveCurrency, removeActiveCurrency } from 'constants/manageCurrencies'

describe('addCurrency Action', () => {
  let fixture
  beforeEach(() => {
    fixture = {}
  })

  it('should add requested currency', () => {
    const expected = {
      type: addActiveCurrency.request,
      which: fixture
    }

    expect(addCurrency(fixture)).to.eql(expected)
  })

  it('should remove requested currency', () => {
    const expected = {
      type: removeActiveCurrency.request,
      which: fixture
    }

    expect(removeCurrency(fixture)).to.eql(expected)
  })
  
})



