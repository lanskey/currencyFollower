import React from 'react'
import classNames from 'classnames'
import { connect } from 'react-redux'
import { addCurrency } from 'actions/addCurrency'
import CurrencyList from 'components/CurrencyList'

export class CurrencyMenu extends React.Component {
  render () {
    const { currency, welcome } = this.props

    return (
      <div className="container-fluid">
        <div className="row">
          <div className={classNames('col-md-6')}>
            <h1>Hello World {welcome}</h1>
          </div>
          <div className={classNames('col-md-6')}>
            <CurrencyList items={currency} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currency: state.list,
    welcome: state.welcome
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addWelcome: (id) => {
      dispatch(addCurrency(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyMenu)