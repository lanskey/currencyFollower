import React from 'react'
import classNames from 'classnames'
import { connect } from 'react-redux'
import { addCurrency } from 'actions/addCurrency'
import CurrencyList from 'components/CurrencyList'
import CurrencyMenu from 'containers/CurrencyMenu'

export class TestingComponent extends React.Component {
  render () {
    const { currency, welcome } = this.props

    return (
      <div className="container-fluid">
          <div className={classNames('col-md-6')}>
            <div className="row">
              <CurrencyMenu  currencies={currency} />
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

export default connect(mapStateToProps, mapDispatchToProps)(TestingComponent)