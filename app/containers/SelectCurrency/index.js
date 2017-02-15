import React, { PropTypes as ptype, Component } from 'react'
import CurrencyList from 'components/CurrencyList'
import { mapDispatch, mapState } from './mapProps'
import { connect } from 'react-redux'
import { find } from 'lodash'

export class SelectCurrency extends Component {
  markAsFollowed = (item, index) => {
    return () => {
      const { removeFollowed, addFollowed, followed, currencyList } = this.props
      const followedItem = find(followed, item)


      // If element is already in array remove it (deactivate)
      // else mark it as active
      if (followedItem) {
        const index = followed.indexOf(followedItem)
        removeFollowed(index)
      }
      else if(!find(followed, item)) {
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
    return (
      <div>
        <CurrencyList items={currencyList} activeElement={active} followedElements={followed} onClick={this.markAsSelected} onDoubleClick={this.markAsFollowed}/>
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
