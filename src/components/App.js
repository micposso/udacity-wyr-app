import React, { Component } from 'react'
import '../styles/App.css'
import { connect } from 'react-redux'
import Login from './Login'
import { handleInitialData } from '../actions/shared'


class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div className="login-form">
        <style>
          {`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}
        </style>
        <Login />
    </div>
    );
  }
}

export default connect()(App);
