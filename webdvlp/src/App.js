import React, { Component } from 'react'
import './App.css';
import SideBar from "./front/Sidebar.js";
import About from "./front/About.js";
import Home from "./front/Home.js";
import Dashboard from "./front/Dashboard.js"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <SideBar />
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/" exact component={Home} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App