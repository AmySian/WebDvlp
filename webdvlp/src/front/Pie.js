import Chart from 'react-apexcharts'
import React, { Component } from 'react'

class Pie extends Component {
      
    constructor(props) {
      super(props);

      this.state = {
        options: {
          labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        },
        series: [44, 55, 13, 43, 22],
      }
    }

    render() {
      return (
        

        <div id="chart">
          <Chart options={this.state.options} series={this.state.series} type="pie" width="380" />
        </div>


      );
    }
  }

  export default Pie 