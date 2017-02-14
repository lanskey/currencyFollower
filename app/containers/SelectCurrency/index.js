import React, { PropTypes as ptype, Component } from 'react'
import { addCurrency } from 'actions/addCurrency'
import CurrencyList from 'components/CurrencyList'


export class SelectCurrency extends Component {
  state = {
    activeCurrencies: []
  }

  onClickHandler = (index) => {
    return () => {
      const { activeCurrencies } = this.state

      // If element is already in array remove it (deactivate)
      // else mark it as active
      if (activeCurrencies.indexOf(index) >= 0) {
        const stateIndex = activeCurrencies.indexOf(index)
        const newSelectedCurrencies = activeCurrencies.filter((item, index) => index !== stateIndex)

        this.setState({ activeCurrencies: newSelectedCurrencies })
      }
      else {
        this.setState({ activeCurrencies: [...activeCurrencies, index] })
      }
    }
  }

  render () {
    const { currencies } = this.props
    return (
      <div className="container-fluid">
        <CurrencyList items={currencies} activeElements={this.state.activeCurrencies} onClick={this.onClickHandler} />
      </div>
    );
  }
}

SelectCurrency.propTypes = {
  currencies: ptype.array.isRequired
}

export default SelectCurrency