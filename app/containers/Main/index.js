import React from 'react'
import classNames from 'classnames'
import SelectCurrency from 'containers/SelectCurrency'
import CurrencyDetails from 'containers/CurrencyDetails'
import CurrencyFollowed from 'containers/CurrencyFollowed'


export class Main extends React.Component {
  render () {
    return (
      <div className="container-fluid">
        <div className={classNames('col-md-2')}>
          <div className="row">
            <SelectCurrency />
          </div>
        </div>
        <div className={classNames('col-md-9')}>
          <div className="row">
            <CurrencyDetails />
          </div>
          <div className="row">
            <CurrencyFollowed />
          </div>
        </div>
      </div>
    );
  }
}

Main.propTypes = {}

export default Main