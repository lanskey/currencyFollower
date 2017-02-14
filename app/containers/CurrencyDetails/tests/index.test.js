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

  it('should render introduction message when user dose not selected any currency', () => {
    const expected = renderComponent.contains('Please select currency')
    expect(expected).to.eql(true)
  })

  it('should render name, bid, ask, code information', () => {
    const fixture = {
      currency: 'eslotwinski',
      bid: 1,
      ask: 52,
      code: 'test'
    }

    renderComponent.setProps({ active: fixture })

    expect(renderComponent.contains(fixture.currency)).to.eql(true)
    expect(renderComponent.contains(fixture.bid)).to.eql(true)
    expect(renderComponent.contains(fixture.ask)).to.eql(true)
    expect(renderComponent.contains(fixture.code)).to.eql(true)
  })
})
