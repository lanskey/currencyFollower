import React from 'react'
import { connect } from 'react-redux'
import { mapState } from './mapProps'

export class CurrencyDetails extends React.Component {
  render () {
    const { active } = this.props

    if (!active) {
      return (
        <div>
          <h1>Please select currency</h1>
        </div>
      )
    }

    return (
      <div className="container-fluid">
          <h1>name: {active.currency}</h1>
          <h1>bid: {active.bid}</h1>
          <h1>ask: {active.ask}</h1>
          <h1>code: {active.code}</h1>
      </div>
    );
  }
}

CurrencyDetails.propTypes = {}

const mapStateToProps = (state) => mapState(state);

export default connect(mapStateToProps)(CurrencyDetails)