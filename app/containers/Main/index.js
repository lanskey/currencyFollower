import React from 'react'
import classNames from 'classnames'
import { connect } from 'react-redux'
import { addCurrency } from 'actions/addCurrency'
import CurrencyMenu from 'containers/CurrencyMenu'
import { mapDispatch, mapState } from './mapProps';

export class Main extends React.Component {
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

Main.propTypes = {}

const mapStateToProps = (state) => mapState(state);
const mapDispatchToProps = (dispatch) => mapDispatch(dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main)