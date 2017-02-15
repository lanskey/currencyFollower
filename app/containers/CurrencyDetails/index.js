import React, { PropTypes as ptype } from 'react'
import { connect } from 'react-redux'
import { mapState } from './mapProps'

export class CurrencyDetails extends React.Component {
  render () {
    const { date, active } = this.props

    if (!active) {
      return (
        <div>
          <h1>Please select currency</h1>
        </div>
      )
    }

    return (
      <div>
          <h1>name: {active.currency}</h1>
          <h1>bid: {active.bid}</h1>
          <h1>ask: {active.ask}</h1>
          <h1>code: {active.code}</h1>
          <h1>date: {date}</h1>
      </div>
    );
  }
}

CurrencyDetails.propTypes = {
  date: ptype.string,
  active: ptype.object
}

const mapStateToProps = (state) => mapState(state);

export default connect(mapStateToProps)(CurrencyDetails)