import React, { Component } from 'react'
//import './App.css';
import Login from './front/Login.js';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Header from './front/Header.js';
import Footer from './front/Footer.js';
import "bootstrap/dist/css/bootstrap.min.css"
import Dashboard from './front/Dashboard.js';
import User from './front/User.js';

class App extends Component {
  
  render() {
    return (
      <Route exact path="/abc" render={props => <AllBook someProp="2" {...props} />} />
      <Router>
      <div className="App">
        <Route 
            exact path="/"
            username=""
            component={Login}/>
        </div>
        <div className="classroom">
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/dashboard/user" component={User}/>
        </div>
      </Router>
    )
  }
}

export default App