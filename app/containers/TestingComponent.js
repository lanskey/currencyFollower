import React from 'react';
import { connect } from 'react-redux'
import { addCurrency } from './../actions/addCurrency'

export class TestingComponent extends React.Component {
  onClickHandler = () => {
    console.log(this.props.welcome)
    this.props.welcome ? this.props.addWelcome('') : this.props.addWelcome('Testing')
  }

  render() {
    const { currency, welcome } = this.props

    return (
      <div style={{textAlign: 'center'}}>
      <h1>Hello World {welcome}</h1>
        <ul>
          {currency.map((item, index) => (
            <li key={index} onClick={this.onClickHandler}>{item}</li>
          ))}
        </ul>
    </div>);
  }
}

const mapStateToProps = (state) => {
  return {
    currency: state.list,
    welcome: state.welcome
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addWelcome: (id) => {
      dispatch(addCurrency(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestingComponent)