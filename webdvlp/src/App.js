import React, { Component } from 'react'
import './App.css';
import Login from './front/Login.js';
import Barchart from './front/Barchart.js';
import Header from './front/Header.js';
import Footer from './front/Footer.js';
import SideBar from "./front/Sidebar.js";
import About from "./front/About.js";
import Home from "./front/Home.js";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Chart from 'react-apexcharts'

class App extends Component {
  render() {
    return (
      <Router>
     <div className="App">
       
      <SideBar />
        <Header/>
        <Switch>
            <Route path="/about" component={About} />
            <Route path="/" exact component={Home} />
            <Route path="/barchart" component={Barchart} >
            </Route>
  
          </Switch>
        <Login />
        <Footer/>
      </div>
      </Router>
    )
  }
}

export default App