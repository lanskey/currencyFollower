import './styles.scss'

import React from 'react'
import classNames from 'classnames'
import CurrencySingle from 'components/CurrencySingle'

export class CurrencyList extends React.Component {
  render() {
    const { items, onClick, onDoubleClick, activeElement, followedElements } = this.props

    return (
      <ul className={classNames('currency-list', 'col-md-6')} >
        {items.map((currency, index) => (
          <CurrencySingle key={index} item={currency} onClick={onClick(currency)} onDoubleClick={onDoubleClick(currency, index)} isActive={activeElement === currency} isFollowed={followedElements.indexOf(currency) >= 0} />
        ))}
      </ul>
    );
  }
}

CurrencyList.propTypes = {}

export default CurrencyList