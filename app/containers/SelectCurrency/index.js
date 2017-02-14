import React, { PropTypes as ptype, Component } from 'react'
import CurrencyList from 'components/CurrencyList'
import { mapDispatch, mapState } from './mapProps'
import { connect } from 'react-redux'

export class SelectCurrency extends Component {
  state = {
    followedCurrencies: []
  }

  onClickHandler = (index) => {
    return () => {
      const { followedCurrencies } = this.state

      // If element is already in array remove it (deactivate)
      // else mark it as active
      if (followedCurrencies.indexOf(index) >= 0) {
        const stateIndex = followedCurrencies.indexOf(index)
        const newSelectedCurrencies = followedCurrencies.filter((item, index) => index !== stateIndex)

        this.setState({ followedCurrencies: newSelectedCurrencies })
      }
      else {
        this.setState({ followedCurrencies: [...followedCurrencies, index] })
      }
    }
  }

  markAsSelected = (which) => {
    return () => {
      const { markActive } = this.props

      markActive(which)
    }
  }

  render () {
    const { currencyList, active } = this.props
    return (
      <div className="container-fluid">
        <CurrencyList items={currencyList} activeElement={active} followedElements={this.state.followedCurrencies} onClick={this.markAsSelected} />
      </div>
    );
  }
}

SelectCurrency.propTypes = {
  //currencies: ptype.array.isRequired
}

const mapStateToProps = (state) => mapState(state);
const mapDispatchToProps = (dispatch) => mapDispatch(dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SelectCurrency)
