import React, { Component } from 'react'
import Barchart from './Barchart';
import Spline from './Spline';
import Pie from './Pie';
import Bubble from './Bubble';



class Dashboard extends Component {

    render() {
      return (
        <div>
        <h1>
        Find your Seat ! 
            </h1>
<div class= "barchart">
        <Barchart>
        </Barchart>
        </div>
        <div class= "pie">
        <Pie>

            </Pie>
            </div>
            <div class= "spline">
        <Spline>

        </Spline>
        </div>
        <div class = "Bubble">
          <Bubble>
            
          </Bubble>
        </div>
       
        </div>
      )
    }
  }
  
  export default Dashboard