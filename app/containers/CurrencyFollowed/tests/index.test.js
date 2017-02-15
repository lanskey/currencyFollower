import { CurrencyFollowed } from '../index';
import { shallow } from 'enzyme'

describe('<CurrencyDetails />', () => {
  let props
  let renderComponent;
  beforeEach(() => {
    props = {
      followed: [
        {
          currency: 'item',
          bid: 1,
          ask: 2
        },
        {
          currency: 'item1',
          bid: 35,
          ask: 22
        }
      ],
      currency: [ {}, {} ],
      date: null
    }
    renderComponent = shallow(
      <CurrencyFollowed {...props} />
    )
  });

  it('should render name, bid, ask, code information', () => {
    const fixture = props.followed[0]

    renderComponent.setProps({ active: fixture })

    expect(renderComponent.contains(fixture.currency)).to.eql(true)
    expect(renderComponent.contains(fixture.bid)).to.eql(true)
    expect(renderComponent.contains(fixture.ask)).to.eql(true)
    expect(renderComponent.find('.single')).to.have.length.of(props.followed.length)
  })

  it('should render date', () => {
    const fixture = '2013-22-11'

    renderComponent.setProps({ date: fixture })
    expect(renderComponent.contains(fixture)).to.eql(true)
  })

  it('should render initial message date', () => {
    renderComponent.setProps({ followed: [] })
    expect(renderComponent.find('h3')).to.have.length.of(1)
  })
})
