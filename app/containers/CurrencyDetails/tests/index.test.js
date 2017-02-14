import { CurrencyDetails } from '../index';
import { shallow } from 'enzyme'

describe('<CurrencyDetails />', () => {
  let props
  let renderComponent;
  beforeEach(() => {
    props = {
      currency: [ {}, {} ]
    }
    renderComponent = shallow(
      <CurrencyDetails {...props} />
    );
  });

  it('should render details of active currency', () => {

  })
})
