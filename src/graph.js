import React, { Component } from 'react';
import Highcharts from 'highcharts';

class Graph extends Component {
  state = {
    series: [{
      name: 'Gases',
      data: [
        {
          name: 'Argon',
          y: 0.9,
          color: '#3498db'
        },
        {
          name: 'Nitrogen',
          y: 78.1,
          color: '#9b59b6'
        },
        {
          name: 'Oxygen',
          y: 20.9,
          color: '#2ecc71'
        },
        {
          name: 'Trace Gases',
          y: 0.45,
          color: '#f1c40f'
        }
      ]
    }]
  }

  highChartsRender() {
    // Highcharts.chart({
    //   chart: {
    //     type: 'pie',
    //     renderTo: 'atmospheric-composition',
    //     plotBackgroundColor: null,
    //     plotBorderWidth: null,
    //     plotShadow: false,
    //   },
    //   title: {
    //     verticalAlign: 'middle',
    //     floating: true,
    //     text: 'Earth\'s Atmospheric Composition',
    //     style: {
    //       fontSize: '10px',
    //     }
    //   },
    //   plotOptions: {
    //     pie: {
    //       dataLabels: {
    //         format: '{point.name}: {point.percentage:.1f} %'
    //       },
    //       innerSize: '70%',
    //       style: {
    //         color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
    //       }
    //     }
    //   },
    //   series: this.state.series
    // });
    Highcharts.chart({
      chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          renderTo: 'render-chart',
          type: 'pie'
      },
      title: {
          text: 'Browser market shares in January, 2018'
      },
      tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                  enabled: true,
                  format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                  style: {
                      color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                  }
              }
          }
      },
      series: this.state.series
  });
  }

  componentDidMount() {
    this.highChartsRender();
  }

  render() {
    return (
      <div id="render-chart">
      </div>
    );
  }
}

export default Graph;