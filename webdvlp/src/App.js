import React, { Component } from 'react'
import './App.css';
import Login from './front/Login.js';
import SideBar from "./front/Sidebar.js";
import About from "./front/About.js";
import Home from "./front/Home.js";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <SideBar />
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/" exact component={Home} />
          </Switch>
          <Login/>
        </div>
      </Router>
    )
  }
}

export default App