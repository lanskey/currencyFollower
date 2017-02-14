import './styles.scss'

import React from 'react'
import classNames from 'classnames'

export class CurrencySingle extends React.Component {
  render () {
    const { item: { currency }, isActive, onClick } = this.props
    return (
      <li className='currency-single' onClick={onClick}>
        {currency} { isActive !== -1 ? 'Followed': null}
      </li>
    );
  }
}

export default CurrencySingle