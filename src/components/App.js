import React, { Component } from 'react';
import '../styles/App.css';
import Login from './Login'

class App extends Component {
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

export default App;
