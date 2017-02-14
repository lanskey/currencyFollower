import React from 'react'
import classNames from 'classnames'
import CurrencySingle from 'components/CurrencySingle'

export class CurrencyList extends React.Component {
  render() {
    const { items, onClick, activeElements } = this.props

    return (
      <ul className={classNames('col-md-6')} >
        {items.map((currency, index) => (
        <CurrencySingle key={index} item={currency} onClick={onClick(index)} isActive={activeElements.indexOf(index)} />
        ))}
      </ul>
    );
  }
}

export default CurrencyList