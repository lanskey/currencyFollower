import { CurrencyMenu } from '../index';
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
        <CurrencyMenu {...props} />
      </Provider>
    );
  });
})
