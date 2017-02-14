import React from 'react'
import { connect } from 'react-redux'
import { mapState } from './mapProps'

export class CurrencyFollowed extends React.Component {
  render () {
    const { followed } = this.props
    console.log(followed[0])
    return (
      <div >
          <h1>Followed currencies </h1>
        {followed.map((item, index) => (
          <h1 key={index}>{item.currency}</h1>))
        }
      </div>
    );
  }
}

CurrencyFollowed.propTypes = {}

const mapStateToProps = (state) => mapState(state);

export default connect(mapStateToProps)(CurrencyFollowed)