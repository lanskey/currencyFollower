import { Main } from '../index';
import { Provider } from 'react-redux'
import store from '../../../store'
import { shallow } from 'enzyme'

describe('<Main />', () => {
  let props
  let renderComponent;
  beforeEach(() => {
    props = {
      list: [{}, {}],
      active: {}
    }
    renderComponent = shallow(
      <Provider store={store}>
        <Main {...props} />
      </Provider>
    ).shallow();
  });

  it('should render CurrencyMenu', () => {
    const expected = renderComponent.find('CurrencyMenu')
    expect(expected).to.have.length.of(1)
  })
})
