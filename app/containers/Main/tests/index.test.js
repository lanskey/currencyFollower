import { TestingComponent } from '../index';
import { Provider } from 'react-redux'
import store from '../../../store'
import { mount } from 'enzyme'

describe('<Main />', () => {
  let props
  let renderComponent;
  beforeEach(() => {
    props = {
      currency: ['1', '2']
    }
    renderComponent = mount(
      <Provider store={store}>
        <TestingComponent {...props} />
      </Provider>
    );
  });

  it('should render CurrencyMenu', () => {
    const expected = renderComponent.find('CurrencyMenu')
    expect(expected).to.have.length.of(1)
  })
})
