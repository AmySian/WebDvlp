
import Chart from 'react-apexcharts'
import React, { Component } from 'react'


    function generateData(baseval, count, yrange) {
      var i = 0;
      var series = [];
      while (i < count) {
        var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;;
        var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
        var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

        series.push([x, y, z]);
        baseval += 86400000;
        i++;
      }
      return series;
    }

    class Bubble extends Component {
      
      constructor(props) {
        super(props);

        this.state = {
          options: {
            dataLabels: {
              enabled: false
            },

            fill: {
              opacity: 0.8,
            },
            title: {
              text: 'Simple Bubble Chart'
            },
            xaxis: {
              tickAmount: 12,
              type: 'category',
            },
            yaxis: {
              max: 70
            }
          },
          series: [
            {
              name: 'Bubble1',
              data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
                min: 10,
                max: 60
              })
            },
            {
              name: 'Bubble2',
              data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
                min: 10,
                max: 60
              })
            },
            {
              name: 'Bubble3',
              data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
                min: 10,
                max: 60
              })
            },
            {
              name: 'Bubble4',
              data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
                min: 10,
                max: 60
              })
            }
          ]
        }
      }

      render() {
        return (
          

          <div id="chart">
            <Chart options={this.state.options} series={this.state.series} type="bubble" height="350" />
          </div>
  

        );
      }
    }
    export default Bubble;