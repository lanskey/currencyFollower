import { Main } from '../index';
import { shallow } from 'enzyme'
import SelectCurrency from 'containers/SelectCurrency'
import CurrencyDetails from 'containers/CurrencyDetails'
import CurrencyFollowed from 'containers/CurrencyFollowed'


describe('<Main />', () => {
  let props
  let renderComponent;
  beforeEach(() => {
    renderComponent = shallow(
      <Main />
    );
  });

  it('should render SelectCurrency', () => {
    const expected = renderComponent.contains(<SelectCurrency />)
    expect(expected).to.eql(true)
  })

  it('should render CurrencyDetails', () => {
    const expected = renderComponent.contains(<CurrencyDetails />)
    expect(expected).to.eql(true)
  })

  it('should render CurrencyFollowed', () => {
    const expected = renderComponent.contains(<CurrencyFollowed />)
    expect(expected).to.eql(true)
  })
})
