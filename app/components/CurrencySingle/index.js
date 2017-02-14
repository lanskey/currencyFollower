import React from 'react'
import classNames from 'classnames'

export class CurrencySingle extends React.Component {
  render () {
    const { item: { currency } } = this.props

    return (
      <li>
        {currency}
      </li>
    );
  }
}

export default CurrencySingle