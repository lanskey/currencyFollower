import { SelectCurrency } from '../index';
import { shallow } from 'enzyme'
import sinon from 'sinon'

describe('<SelectCurrency />', () => {
  let props
  let renderComponent;
  beforeEach(() => {
    props = {
      currencies: ['1', '2']
    }
    renderComponent = shallow(<SelectCurrency {...props} />);
  });
  
  it('should add the index of clicked element into state.activeCurrencies', () => {
    expect(renderComponent.state().followedCurrencies).to.eql([])

    renderComponent.instance().onClickHandler(1)()
    expect(renderComponent.state().followedCurrencies).to.eql([1])

    renderComponent.instance().onClickHandler(1)()
    expect(renderComponent.state().followedCurrencies).to.eql([])
  })

  it('should render CurrencyList component', () => {
    const expected = renderComponent.find('CurrencyList')
    expect(expected).to.have.length.of(1)
  })

  it('should mark selected currency component', () => {
    const mockMarkActive = sinon.mock()
    renderComponent.setProps({ markActive: mockMarkActive })

    renderComponent.instance().markAsSelected()()
    expect(mockMarkActive.calledOnce).to.eql(true)
  })
})
