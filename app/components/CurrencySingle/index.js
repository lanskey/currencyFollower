import './styles.scss'

import React, { PropTypes as ptype, Component } from 'react'
import classNames from 'classnames'

export class CurrencySingle extends Component {
  render () {
    const { item: { currency }, isFollowed, isActive, onClick } = this.props
    return (
      <li className={classNames('currency-single', isActive ? 'currency-single--is-active' : null)} onClick={onClick}>
        {currency} { isFollowed ? 'Followed': null}
      </li>
    );
  }
}

CurrencySingle.propTypes = {
  isFollowed: ptype.bool,
  item: ptype.object.isRequired
}

export default CurrencySingle