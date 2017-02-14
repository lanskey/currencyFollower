import './styles.scss'

import React, { PropTypes as ptype, Component } from 'react'

export class CurrencySingle extends Component {
  render () {
    const { item: { currency }, isFollowed, onClick } = this.props
    return (
      <li className='currency-single' onClick={onClick}>
        {currency} { isFollowed ? 'Followed': null}
      </li>
    );
  }
}

CurrencySingle.propTypes = {
  isFollowed: ptype.bool,
  item: ptype.object.isRequired
}

export default CurrencySingle