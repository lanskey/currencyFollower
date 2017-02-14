import { CurrencyFollowed } from '../index';
import { shallow } from 'enzyme'

describe('<CurrencyDetails />', () => {
  let props
  let renderComponent;
  beforeEach(() => {
    props = {
      followed: [],
      currency: [ {}, {} ]
    }
    renderComponent = shallow(
      <CurrencyFollowed {...props} />
    )
  });

  it('should render details of active currency', () => {

  })
})
