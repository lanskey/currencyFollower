import sinon from 'sinon'
import React from 'react';
import { shallow } from 'enzyme';

import CurrencySingle from '../index';


describe('<CurrencySingle />', () => {
  let renderComponent;
  const props = {
    item: {
      currency: 'USD'
    },
    isFollowed: true,
    onClick: sinon.spy(),
  }
  beforeEach(() => {
    renderComponent = shallow(<CurrencySingle {...props} />, {});
  })

  it('Should render currency name', () => {
    const expected = renderComponent.contains(props.item.currency)
    expect(expected).to.eql(true)
  })

  it('Should render Followed msg when isFollowed === true', () => {
    expect(renderComponent.contains('Followed')).to.eql(true)

    renderComponent.setProps({ isFollowed: false })
    expect(renderComponent.contains('Followed')).to.eql(false)
  })

  it('Should handle onClick event', () => {
    expect(props.onClick.calledOnce).to.eql(false)

    renderComponent.find('li').simulate('click')
    expect(props.onClick.calledOnce).to.eql(true)
  })
});
