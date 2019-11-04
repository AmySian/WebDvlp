import React, { Component } from 'react'
import './App.css';
import Login from './front/Login.js';
import Header from './front/Header.js';
import Footer from './front/Footer.js';
import SideBar from "./front/Sidebar.js";
import About from "./front/About.js";
import Home from "./front/Home.js";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Chart from 'react-apexcharts'

class App extends Component {
  constructor(props) {
    super(props);

  this.state = {
    options: {
      chart: {
        id: 'apexchart-example'
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
      }
    },
    series: [{
      name: 'series-1',
      data: [30, 40, 45, 50, 49, 60, 70, 91]
    }]
  }
}
  render() {
    return (
      <Router>
     <div className="App">
       
      <SideBar />
        <Header/>
        
      <Chart options={this.state.options} series={this.state.series} type="bar" width={500} height={320} />
    
        <Switch>
            <Route path="/about" component={About} />
            <Route path="/" exact component={Home} />
          </Switch>
        <Login />
        <Footer/>
      </div>
      </Router>
    )
  }
}

export default App