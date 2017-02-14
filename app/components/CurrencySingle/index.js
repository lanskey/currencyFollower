import './styles.scss'

import React, { PropTypes as ptype, Component } from 'react'

export class CurrencySingle extends Component {
  render () {
    const { item: { currency }, isActive, onClick } = this.props
    return (
      <li className='currency-single' onClick={onClick}>
        {currency} { isActive !== -1 ? 'Followed': null}
      </li>
    );
  }
}

CurrencySingle.propTypes = {
  item: ptype.object.isRequired
}

export default CurrencySingle