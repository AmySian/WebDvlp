import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import React, { Component } from 'react'
import Barchart from './Barchart';
import Spline from './Spline';
import Pie from './Pie';

class Dashboard extends Component {

    render() {
      return (
          <div>

        
        <Barchart>
        </Barchart>
        <Pie>
            
            </Pie>
        <Spline>

        </Spline>
       
        </div>
      )
    }
  }
  
  export default Dashboard