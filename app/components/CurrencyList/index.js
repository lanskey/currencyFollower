import './styles.scss'

import React from 'react'
import classNames from 'classnames'
import CurrencySingle from 'components/CurrencySingle'
import { find } from 'lodash'

export class CurrencyList extends React.Component {
  render() {
    const { items, onClick, onDoubleClick, activeElement, followedElements } = this.props

    return (
      <ul className={classNames('currency-list')} >
        {items.map((currency, index) => (
          <CurrencySingle key={index} item={currency} onClick={onClick(currency)} onDoubleClick={onDoubleClick(currency, index)} isActive={activeElement && activeElement.code === currency.code} isFollowed={find(followedElements, currency)} />
        ))}
      </ul>
    );
  }
}

CurrencyList.propTypes = {}

export default CurrencyList