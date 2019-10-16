import React, { Component } from 'react'
import './App.css';
import Login from './front/Login.js';
import Header from './front/Header.js';
import Footer from './front/Footer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <h1>Hello, React!</h1>
        <Login/>
        <Footer/>
      </div>
    )
  }
}

export default App