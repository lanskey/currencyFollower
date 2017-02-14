import sinon from 'sinon'
import React from 'react';
import { shallow } from 'enzyme';

import CurrencyList from '../index';

describe('<CurrencyList />', () => {
  let renderComponent;
  const props = {
    items: [
      {
        currency: 'USD'
      },
      {
        currency: 'ZL'
      },
    ],
    followedElements: [],
    onClick: sinon.spy(),
    onDoubleClick: sinon.spy(),
  }
  beforeEach(() => {
    renderComponent = shallow(<CurrencyList {...props} />, {});
  })

  it('Should render multiple CurrencySingle items, basing on the length of items', () => {
    const expected = renderComponent.find('CurrencySingle')
    expect(expected).to.have.length.of(props.items.length)
  })
});