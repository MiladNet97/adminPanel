/* =================================================================
                          [ Initialize ChartJs   ]
==================================================================*/
// variables
var statisticsVisit = document.getElementById('statistics-visit__chart');
var statisticSell = document.getElementById('statistics-sell__chart');

// chart data
var statisticsVisitData = {
  labels: ['Jul 5', 'Jul 6', 'Jul 7', 'Jul 8', 'Jul 9', 'Jul 10', 'Jul 11', 'Jul 12', 'Jul 13', 'Jul 14', 'Jul 15'],
  datasets: [{
    label: 'بازدیدکنندگان',
    data: [129, 266, 538, 435, 432, 662, 235, 356, 652, 356, 380],
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgba(255, 99, 132, 1)',
    borderWidth: 1,
    fill: true,
    lineTension: 0.3,
    pointRadius: 3
  }, {
    label: 'بازدیدها',
    data: [756, 720, 856, 1206, 1160, 980, 920, 1350, 1442, 1263, 1355],
    backgroundColor: 'rgba(54, 162, 235, 0.2)',
    borderColor: 'rgba(54, 162, 235, 1)',
    borderWidth: 1,
    fill: true,
    lineTension: 0.3,
    pointRadius: 3
  }]
}

var statisticSellData = {
  labels: ['Jul 5', 'Jul 6', 'Jul 7', 'Jul 8', 'Jul 9', 'Jul 10', 'Jul 11', 'Jul 12', 'Jul 13', 'Jul 14', 'Jul 15'],
  datasets: [{
    label: 'تعداد فروش',
    data: [34, 38, 35, 42, 40, 45, 60, 58, 63, 65, 73],
    backgroundColor: 'rgba(75, 192, 192, 0.2)',
    borderColor: 'rgb(75, 192, 192)',
    borderWidth: 2,
    fill: true,
    lineTension: 0,
    pointRadius: 3
  }]
}

// chart options
var statisticsVisitOptions = {
  responsive: true,
  maintainAspectRatio: false,
  title: {
    display: true,
    position: 'top',
    text: 'آخرین بازدیدها در 10 روز گذشته',
    fontColor: '#6c757d',
    fontSize: 14,
    fontFamily: 'IRANSans'
  },
  legend: {
    position: 'bottom',
    labels: {
      fontColor: '#6c757d',
      fontSize: 13,
      fontFamily: 'IRANSans'
    }
  },
}

var statisticSellOptions = {
  responsive: true,
  maintainAspectRatio: false,
  title: {
    display: true,
    position: 'top',
    text: 'آمار فروش در 10 روز گذشته',
    fontColor: '#6c757d',
    fontSize: 14,
    fontFamily: 'IRANSans'
  },
  legend: {
    position: 'bottom',
    labels: {
      fontColor: '#6c757d',
      fontSize: 13,
      fontFamily: 'IRANSans'
    }
  },

}

// Initialize Chart
new Chart(statisticsVisit, {
  type: 'line',
  data: statisticsVisitData,
  options: statisticsVisitOptions
});

new Chart(statisticSell, {
  type: 'line',
  data: statisticSellData,
  options: statisticSellOptions
});