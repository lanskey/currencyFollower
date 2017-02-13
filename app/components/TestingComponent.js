/*
 ./client/components/App.jsx
 */
import React from 'react';
import { connect } from 'react-redux'

function addTodo(text) {
  return {
    type: 'TEST',
    text
  }
}

class App extends React.Component {
  render() {
    console.log(this.props.todos)
    this.props.addWelcome('Testing')
    return (
      <div style={{textAlign: 'center'}}>
      <h1>Hello World</h1>
    </div>);
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.list
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addWelcome: (id) => {
      dispatch(addTodo(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)