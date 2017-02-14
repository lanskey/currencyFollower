import { CurrencyDetails } from '../index';
import { Provider } from 'react-redux'
import store from '../../../store'
import { mount } from 'enzyme'

describe('<Main />', () => {
  let props
  let renderComponent;
  beforeEach(() => {
    props = {
      currency: [{}, {}]
    }
    renderComponent = mount(
      <Provider store={store}>
        <CurrencyDetails {...props} />
      </Provider>
    );
  });

  it('should render details of active currency', () => {

  })
})
