import React from 'react'
import classNames from 'classnames'
import { connect } from 'react-redux'
import CurrencyMenu from 'containers/CurrencyMenu'
import { mapDispatch, mapState } from './mapProps'

export class CurrencyDetails extends React.Component {
  render () {
    const { currency } = this.props

    return (
      <div className="container-fluid">
          <h1>Details of current currency</h1>
      </div>
    );
  }
}

CurrencyDetails.propTypes = {}

const mapStateToProps = (state) => mapState(state);
const mapDispatchToProps = (dispatch) => mapDispatch(dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyDetails)