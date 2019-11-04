import Chart from 'react-apexcharts'
import React, { Component } from 'react'
//import './Barchart.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

class Barchart extends Component {
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
    return(
        <Router>
        <div className="Barchart">
        <Chart options={this.state.options} series={this.state.series} type="bar" width={500} height={320} />
        </div>
        </Router>
        )
  }
}



export default Barchart