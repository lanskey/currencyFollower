import { Main } from '../index';
import { shallow } from 'enzyme'


describe('<Main />', () => {
  let props
  let renderComponent;
  beforeEach(() => {
    props = {
      list: [ {}, {} ],
      active: {}
    }
    renderComponent = shallow(
      <Main {...props} />
    );
  });

  it('should render CurrencyMenu', () => {
    const expected = renderComponent.find('CurrencyMenu')
    expect(expected).to.have.length.of(1)
  })
})
