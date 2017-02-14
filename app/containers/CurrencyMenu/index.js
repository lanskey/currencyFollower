import React from 'react'
import { connect } from 'react-redux'
import { addCurrency } from 'actions/addCurrency'
import SelectCurrency from 'containers/SelectCurrency'

export class CurrencyMenu extends React.Component {
  render () {
    return (
      <SelectCurrency currencies={this.props.currencies} />
    );
  }
}

CurrencyMenu.propTypes = {}

export default CurrencyMenu