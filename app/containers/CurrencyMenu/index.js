import React from 'react'
import { connect } from 'react-redux'
import SelectCurrency from 'containers/SelectCurrency'

export class CurrencyMenu extends React.Component {
  render () {
    return (
      <SelectCurrency />
    );
  }
}

CurrencyMenu.propTypes = {}

export default CurrencyMenu