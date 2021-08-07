/* =================================================================
                          [ Initialize ChartJs   ]
==================================================================*/
// variables
var statisticsBrowser = document.getElementById('statistics-browsers__chart').getContext('2d');
var statisticsSearch = document.getElementById('statistics-search-engine__chart');

// chart data
var statisticsBrowserData = {
  labels: ['FireFox', 'Chrome', 'Opera', 'Safari', 'Edge', 'دیگر'],
  datasets: [{
    data: [32, 38, 8, 10, 5, 7],
    backgroundColor: ['#ffcd56', '#248239', '#c43744', '#27abc0', '#1877dc', '#636a6f'],
  }]
}

var statisticsSearchData = {
  labels: ['Jul 1', 'Jul 2', 'Jul 3', 'Jul 4', 'Jul 5', 'Jul 6', 'Jul 7', 'Jul 8', 'Jul 9', 'Jul 10', 'Jul 11', 'Jul 12', 'Jul 13', 'Jul 14', 'Jul 15'],
  datasets: [{
    label: 'Google',
    data: [44, 48, 45, 48, 50, 52, 50, 54, 50, 55, 56, 58, 58, 60, 63],
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgba(255, 99, 132, 1)',
    borderWidth: 1,
    fill: true,
    lineTension: 0.3,
    pointRadius: 3
  }, {
    label: 'Bing',
    data: [12, 10, 8, 5, 3, 5, 1, 2, 7, 10, 12, 10, 10, 15, 20],
    backgroundColor: 'rgba(54, 162, 235, 0.2)',
    borderColor: 'rgba(54, 162, 235, 1)',
    borderWidth: 1,
    fill: true,
    lineTension: 0.3,
    pointRadius: 3
  }, {
    label: 'Yahoo',
    data: [6, 7, 5, 3, 2, 2, 3, 5, 2, 1, 1, 5, 7, 8, 7],
    backgroundColor: 'rgba(255 , 249, 197 ,0.2)',
    borderColor: 'rgba(227, 203, 0, 1)',
    borderWidth: 1,
    fill: true,
    lineTension: 0.3,
    pointRadius: 3
  }, {
    label: 'Other',
    data: [1, 1, 3, 2, 2, 1, 0, 2, 3, 1, 5, 5, 3, 2, 2],
    backgroundColor: 'rgba(190, 231, 207, 1)',
    borderColor: 'rgba(30, 126, 52, 1)',
    borderWidth: 1,
    fill: true,
    lineTension: 0.3,
    pointRadius: 3
  }]
}

// chart options
var statisticsBrowserOptions = {
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    position: 'bottom',
    labels: {
      fontColor: '#6c757d',
      fontSize: 13,
      fontFamily: "IRANSans",
    }
  },
  tooltips: {
    callbacks: {
      label: function (tooltipItem, data) {
        return data['labels'][tooltipItem['index']] + ': ' + data['datasets'][0]['data'][tooltipItem['index']] + '%';
      }
    }
  }

}

var statisticsSearchOptions = {
  responsive: true,
  maintainAspectRatio: false,
  title: {
    display: true,
    position: 'top',
    text: 'ارجاع های موتورهای جستجو در 15 روز گذشته',
    fontColor: '#6c757d',
    fontSize: 13,
    fontFamily: "IRANSans",
  },
  legend: {
    position: 'bottom',
    labels: {
      color: '#6c757d',
      font: {
        size: 13,
        family: 'IRANSans'
      },
    }
  },
}

// Initialize Chart
new Chart(statisticsBrowser, {
  type: 'pie',
  data: statisticsBrowserData,
  options: statisticsBrowserOptions
});

new Chart(statisticsSearch, {
  type: 'line',
  data: statisticsSearchData,
  options: statisticsSearchOptions
});