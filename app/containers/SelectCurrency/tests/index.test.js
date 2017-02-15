import { SelectCurrency } from '../index';
import { shallow, mount } from 'enzyme'
import sinon from 'sinon'

describe('<SelectCurrency />', () => {
  let props
  let renderComponent;
  beforeEach(() => {
    props = {
      active: {},
      currencyList: [{}, {}],
      markActive: sinon.spy(),
      getCurrencies: sinon.mock(),
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
  
  it('should add currency to followed list', () => {
    const mockAddFollowed = sinon.mock()

    renderComponent.setProps({ addFollowed: mockAddFollowed })

    renderComponent.instance().markAsFollowed()()
    expect(mockAddFollowed.calledOnce).to.eql(true)
  })

  it('should remove currency from followed list', () => {
    const mockRemoveFollowed = sinon.mock()
    const fixture = {}
    renderComponent.setProps({ followed: [fixture], removeFollowed: mockRemoveFollowed })

    renderComponent.instance().markAsFollowed(fixture)()
    expect(mockRemoveFollowed.calledOnce).to.eql(true)
  })

  it('should render CurrencyList', () => {
    const expected = renderComponent.find('CurrencyList')
    expect(expected).to.have.length.of(1)
  })

  it('should get CurrencyList when componentDidMount', (done) => {
    const didMount = sinon.spy(SelectCurrency.prototype, 'componentDidMount')

    renderComponent = mount(<SelectCurrency {...props} />)
    expect(didMount.callCount).to.eql(1)

    // Most implest way to test async call
    setTimeout(() => {
      expect(props.getCurrencies.callCount).to.eql(1)
      done()
    }, 200)
    didMount.restore()
  })
  
})
