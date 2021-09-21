var options = {
    chart: {
        type: 'line'
    },
    series: [{
        name: 'sales',
        data: [30,40,35,50,49,60,70,91,125]
    }],
    xaxis: {
        categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
    },
    stroke: {
        curve: 'smooth',
    },
    markers: {
        size: 0,
    }
    ,
    markers: {
        colors: ['#9C27B0', '#E91E63', '#F44336']
     }
}
var chart_line = new ApexCharts(document.querySelector("#chart-line"), options);
chart_line.render();

var options = {
    chart: {
        type: 'area'
    },
    series: [
        {
            name: 'sales 1',
            data: [30,40,35,50,49,60,70,91,125]
        },
        {
            name: 'sales 2',
            data: [20,10,45,70,39,80,40,91,100]
        }
    ],
    xaxis: {
        categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
    },
    stroke: {
        curve: 'smooth',
    },
    markers: {
        size: 0,
    }
    ,
    markers: {
        colors: ['#9C27B0', '#E91E63', '#F44336']
     }
}
var chart_area = new ApexCharts(document.querySelector("#chart-area"), options);
chart_area.render();

var options = {
    chart: {
        height: 350,
        type: "treemap",
      },
      series: [
        {
          data: [
            {
              x: "New Delhi",
              y: 218,
            },
            {
              x: "Kolkata",
              y: 149,
            },
            {
              x: "Mumbai",
              y: 184,
            },
            {
              x: "Ahmedabad",
              y: 55,
            },
            {
              x: "Bangaluru",
              y: 84,
            },
            {
              x: "Pune",
              y: 31,
            },
            {
              x: "Chennai",
              y: 70,
            }
          ],
        },
      ]
}
var chart_treemap = new ApexCharts(document.querySelector("#chart-treemap"), options);
chart_treemap.render();

var options = {
    chart: {
      height: 350,
      type: "line",
      stacked: false
    },
    dataLabels: {
      enabled: false
    },
    colors: ["#FF1654", "#247BA0"],
    series: [
      {
        name: "Series A",
        data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
      },
      {
        name: "Series B",
        data: [20, 29, 37, 36, 44, 45, 50, 58]
      }
    ],
    stroke: {
      width: [4, 4]
    },
    plotOptions: {
      bar: {
        columnWidth: "20%"
      }
    },
    xaxis: {
      categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016]
    },
    yaxis: [
      {
        axisTicks: {
          show: true
        },
        axisBorder: {
          show: true,
          color: "#FF1654"
        },
        labels: {
          style: {
            colors: "#FF1654"
          }
        },
        title: {
          text: "Series A",
          style: {
            color: "#FF1654"
          }
        }
      },
      {
        opposite: true,
        axisTicks: {
          show: true
        },
        axisBorder: {
          show: true,
          color: "#247BA0"
        },
        labels: {
          style: {
            colors: "#247BA0"
          }
        },
        title: {
          text: "Series B",
          style: {
            color: "#247BA0"
          }
        }
      }
    ],
    tooltip: {
      shared: false,
      intersect: true,
      x: {
        show: false
      }
    },
    legend: {
      horizontalAlign: "left",
      offsetX: 40
    }
  };  
var chart_multiaxis = new ApexCharts(document.querySelector("#chart-multiaxis"), options);  
chart_multiaxis.render();

var options = {
    chart: {
        type: 'donut'
    },
    series: [44, 55, 13, 33],
    labels: ['Apple', 'Mango', 'Orange', 'Watermelon'],
    colors:['#068D9D', '#53599A', '#6D9DC5', '#80DED9']
}
var chart_donut = new ApexCharts(document.querySelector("#chart-donut"), options);
chart_donut.render();

var options = {
    chart: {
        type: 'pie'
    },
    series: [44, 55, 13, 33],
    labels: ['Apple', 'Mango', 'Orange', 'Watermelon']
}
var chart_pie = new ApexCharts(document.querySelector("#chart-pie"), options);
chart_pie.render();

var options = {
    chart: {
        type: 'radar'
    },
    series: [
        {
          name: "Radar Series 1",
          data: [45, 52, 38, 24, 33, 10]
        },
        {
          name: "Radar Series 2",
          data: [26, 21, 20, 6, 8, 15]
        }
      ],
    labels: ['April', 'May', 'June', 'July', 'August', 'September']
}
var chart_radar = new ApexCharts(document.querySelector("#chart-radar"), options);
chart_radar.render();

var options = {
    chart: {
        type: 'rangeBar'
    },
    series: [{
        data: [{
          x: 'TEAM A',
          y: [65, 96]
        },
        {
          x: 'TEAM B',
          y: [55, 78]
        },
        {
          x: 'TEAM C',
          y: [95, 186]
        }]
      }],
}
var chart_rangeBar = new ApexCharts(document.querySelector("#chart-rangeBar"), options);
chart_rangeBar.render();

var options = {
    chart: {
      height: 280,
      type: "radialBar",
    },
  
    series: [67],
    colors: ["#20E647"],
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: "70%",
          background: "#293450"
        },
        track: {
          dropShadow: {
            enabled: true,
            top: 2,
            left: 0,
            blur: 4,
            opacity: 0.15
          }
        },
        dataLabels: {
          name: {
            offsetY: -10,
            color: "#fff",
            fontSize: "13px"
          },
          value: {
            color: "#fff",
            fontSize: "30px",
            show: true
          }
        }
      }
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "vertical",
        gradientToColors: ["#87D4F9"],
        stops: [0, 100]
      }
    },
    stroke: {
      lineCap: "round"
    },
    labels: ["Progress"]
  };
  
  var chart_radialBar = new ApexCharts(document.querySelector("#chart-radialBar"), options);
  
  chart_radialBar.render();