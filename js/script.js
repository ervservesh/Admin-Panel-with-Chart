// chart colors
var colors = ['#4161c8','#9ccee7','#28a745','#333333','#c3e6cb','#dc3545','#6c757d'];

/* large line chart */
var chLine = document.getElementById("chLine");
var ctx1 = document.getElementById("chLine").getContext("2d");
var gradient = ctx1.createLinearGradient(0, 0, 0, 225);
gradient.addColorStop(0, "rgba(215, 227, 244, 1)");
gradient.addColorStop(1, "rgba(215, 227, 244, 0)");
var chartData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [{
    data: [100, 40, 30, 80, 75, 25, 10],
    backgroundColor: gradient,
    borderColor: 'blue',
    borderWidth: 4,
    pointBackgroundColor: colors[0]
  }]
};
if (chLine) {
  new Chart(chLine, {
  type: 'line',
  data: chartData,
  options: {
    scales: {
      yAxes: [{
        ticks: {
            beginAtZero: true,
            stepSize: 25,
            callback: function(label, index, labels) {
              //alert(labels)
              if (Math.floor(label) === label) {
                 return '$'+label+'k';
               }
            },

        },
        gridLines: {
          borderDash: [20, 12],
        },
      }],

      xAxes: [{
        ticks: {
          beginAtZero: false
        },
        gridLines: {
          display: false,
          drawOnChartArea:false,
        },
      }]
    },
    legend: {
      display: false
    },
    responsive: true
  }
  });
}



/* bar chart */
var chBar = document.getElementById("chBar");
if (chBar) {
  new Chart(chBar, {
  type: 'bar',
  data: {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
      data: [20,25,10,15,10,12,30],
      backgroundColor: colors[0]
    },
    {
      data: [25,15,13,8,18,22,21],
      backgroundColor: colors[1]
    }]
  },
  options: {
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        ticks: {
            beginAtZero: true,
            stepSize: 10,
            gridLines: {
             display: false
            },
            callback: function(label, index, labels) {
              //alert(labels)
              if (Math.floor(label) === label) {
                 return '$'+label+'k';
               }
            }
        },
        gridLines: {
          borderDash: [20, 12]
        }
      }],
      xAxes: [{
        barPercentage: 0.4,
        categoryPercentage: 0.5,
        gridLines: {
           display: false
         },
      }]
    }
  }
  });
}



