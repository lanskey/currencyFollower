import { TestingComponent } from '../index';
import { Provider } from 'react-redux'
import store from '../../../store'
import { mount } from 'enzyme'

describe('addCurrency', () => {
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

  it('should render h1', () => {
    const expected = renderComponent
    expect(expected.find('h1')).to.have.length.of(1)
  })

})
