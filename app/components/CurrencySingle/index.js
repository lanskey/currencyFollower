import React from 'react'
import classNames from 'classnames'

export class CurrencySingle extends React.Component {
  render () {
    const { item: { currency }, isActive, onClick } = this.props
    return (
      <li onClick={onClick}>
        {currency} { isActive !== -1 ? 'is active' : null}
      </li>
    );
  }
}

export default CurrencySingle