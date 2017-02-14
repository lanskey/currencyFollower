import { SelectCurrency } from '../index';
import { shallow } from 'enzyme'
import sinon from 'sinon'

describe('<SelectCurrency />', () => {
  let props
  let renderComponent;
  beforeEach(() => {
    props = {
      active: {},
      currencyList: ['1', '2'],
      markActive: sinon.spy(),
      followed:[]
    }
    renderComponent = shallow(<SelectCurrency {...props} />);
  });
  
  it('should add the index of clicked element into state.activeCurrencies', () => {
    const spyMock = props.markActive
    const fixture = {test: 'test'}

    renderComponent.instance().markAsSelected(fixture)()
    expect(spyMock.calledOnce).to.eql(true)
    renderComponent.setProps({ active: fixture })

    renderComponent.instance().markAsSelected(fixture)()
    expect(spyMock.calledTwice).to.eql(false)
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
