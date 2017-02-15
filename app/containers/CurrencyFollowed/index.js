import './styles.scss'

import React, { PropTypes as ptype } from 'react'
import { connect } from 'react-redux'
import { mapState } from './mapProps'

export class CurrencyFollowed extends React.Component {
  renderSingle = (item, index) => (
    <div className="single" key={index}>
      <h3>Name: {item.currency}</h3>
      <h3>Buy: {item.bid}</h3>
      <h3>Sell: {item.ask}</h3>
    </div>
  )

  renderList = (followed) => (
    followed.map((item, index) => this.renderSingle(item, index))
  )

  render () {
    const { followed, date } = this.props

    const msg = 'Double click on currency you wish to follow'
    return (
      <div className="currency-followed">
        <h1>Followed currencies for date: {date ? date : 'loading'}</h1>
        <div className="list">
          {followed.length > 0 ? this.renderList(followed) : <h3>{msg}</h3>}
        </div>
      </div>
    );
  }
}

CurrencyFollowed.propTypes = {
  date: ptype.string,
  followed: ptype.array
}

const mapStateToProps = (state) => mapState(state);

export default connect(mapStateToProps)(CurrencyFollowed)