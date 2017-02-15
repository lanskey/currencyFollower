import React, { PropTypes as ptype, Component } from 'react'
import CurrencyList from 'components/CurrencyList'
import { mapDispatch, mapState } from './mapProps'
import { connect } from 'react-redux'
import { find } from 'lodash'
import { getCurrenciesList } from 'services'

export class SelectCurrency extends Component {
  componentDidMount() {
    getCurrenciesList().then((data) => {
      this.props.getCurrencies(data.rates, data.effectiveDate)
    })
  }

  markAsFollowed = (item) => {
    return () => {
      const { removeFollowed, addFollowed, followed, currencyList } = this.props
      const followedItem = find(followed, item)

      // If element is already in array remove it (deactivate)
      // else mark it as active
      if (followedItem) {
        const index = followed.indexOf(followedItem)
        removeFollowed(index)
      }
      else if(!followedItem) {
        const which = currencyList.filter(currency => currency === item)
        addFollowed(...which)
      }
    }
  }

  markAsSelected = (which) => {
    return () => {
      const { markActive, active } = this.props

      if (active !== which) {
        markActive(which)
      }
    }
  }

  render () {
    const { currencyList, active, followed } = this.props

    if (currencyList.length <= 0) {
      return ( <div>Loading</div> )
    }

    return (
      <div>
        <CurrencyList items={currencyList} activeElement={active} followedElements={followed} onClick={this.markAsSelected} onDoubleClick={this.markAsFollowed}/>
      </div>
    );
  }
}

SelectCurrency.propTypes = {
  active: ptype.object.isRequired,
  followed: ptype.array.isRequired,
  currencyList: ptype.array.isRequired,
  markActive: ptype.func.isRequired,
  addFollowed: ptype.func.isRequired,
  removeFollowed: ptype.func.isRequired,
  getCurrencies: ptype.func.isRequired,
}

const mapStateToProps = (state) => mapState(state);
const mapDispatchToProps = (dispatch) => mapDispatch(dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SelectCurrency)
