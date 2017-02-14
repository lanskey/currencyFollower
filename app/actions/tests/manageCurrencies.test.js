import { addCurrency } from '../manageCurrencies'
import { addActiveCurrency } from 'constants/manageCurrencies'

describe('addCurrency Action', () => {
  let fixture
  beforeEach(() => {
    fixture = 'eslotwinski'
  })

  it('should call test action', () => {
    const expected = {
      type: addActiveCurrency.request,
      text: fixture
    }

    expect(addCurrency(fixture)).to.eql(expected)
  })
  
})



