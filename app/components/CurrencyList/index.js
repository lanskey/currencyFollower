import React from 'react'
import classNames from 'classnames'
import CurrencySingle from 'components/CurrencySingle'

export class CurrencyList extends React.Component {
  onClickHandler = () => {
    console.log(this.props.welcome)
    this.props.welcome ? this.props.addWelcome('') : this.props.addWelcome('Testing')
  }

  render() {
    const { items } = this.props

    return (
      <ul className={classNames('col-md-6')}>
        {items.map((currency, index) => (
          <CurrencySingle key={index} item={currency}/>
        ))}
      </ul>
    );
  }
}

export default CurrencyList