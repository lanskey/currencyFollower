import './styles.scss'

import React, { PropTypes as ptype, Component } from 'react'
import classNames from 'classnames'

export class CurrencySingle extends Component {
  render () {
    const { item: { currency }, isFollowed, isActive, onClick, onDoubleClick } = this.props

    const cs = classNames(
      'currency-single',
      isActive ? 'currency-single--is-active' : null,
      isFollowed ? 'currency-single--is-followed' : null,
    )
    return (
      <li className={cs} onClick={onClick} onDoubleClick={onDoubleClick}>
        {currency} { isFollowed ? 'Followed': null}
      </li>
    );
  }
}

CurrencySingle.propTypes = {
  isFollowed: ptype.oneOfType([
    ptype.object,
    ptype.bool
  ]),
  item: ptype.object.isRequired
}

export default CurrencySingle