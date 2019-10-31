import React, { Component } from 'react'
import './App.css';
import Login from './front/Login.js';
import Header from './front/Header.js';
import Footer from './front/Footer.js';
import SideBar from "./front/Sidebar.js";

class App extends Component {
  render() {
    return (
      <div className="App">
      <SideBar />
        <Header/>
        <h1>Choose Your Seat !</h1>
        <Login/>
        <Footer/>
        <h2>Hello, React!</h2>
      </div>
    )
  }
}

export default App