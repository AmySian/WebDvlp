import React, { Component } from 'react'
import './App.css';
import Login from './Login.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Login/>
        <h1>Hello, React!</h1>
      </div>
    )
  }
}

export default App