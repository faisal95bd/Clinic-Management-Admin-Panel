$(document).ready(function () {
  // Bar Chart

  var barChartData = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
      {
        label: "Male",
        backgroundColor: "#6FD1F6",
        borderColor: "#6FD1F6",
        borderWidth: 1,
        data: [35, 29, 60, 21, 56, 15, 40],
      },
      {
        label: "Female",
        backgroundColor: "#504DA6",
        borderColor: "#504DA6",
        borderWidth: 1,
        data: [58, 48, 80, 69, 86, 27, 90],
      },
    ],
  };

  var ctx = document.getElementById("bargraph").getContext("2d");
  window.myBar = new Chart(ctx, {
    type: "bar",
    data: barChartData,
    options: {
      responsive: true,
      legend: {
        display: false,
      },
    },
  });

  // Line Chart

  //  var lineChartData = {
  //    labels: [
  //      "Jan",
  //      "Feb",
  //      "Mar",
  //      "Apr",
  //      "May",
  //      "Jun",
  //      "Jul",
  //      "Aug",
  //      "Sep",
  //      "Oct",
  //      "Nov",
  //      "Dec",
  //    ],
  //    datasets: [
  //      {
  //        label: "My First dataset",
  //        backgroundColor: "rgba(0, 158, 251, 0.5)",
  //        data: [
  //          100,
  //          70,
  //          20,
  //          100,
  //          120,
  //          50,
  //          70,
  //          50,
  //          50,
  //          100,
  //          50,
  //          90,
  //        ],
  //      },
  //      {
  //        label: "My Second dataset",
  //        backgroundColor: "rgba(255, 188, 53, 0.5)",
  //        fill: true,
  //        data: [
  //          28,
  //          48,
  //          40,
  //          19,
  //          86,
  //          27,
  //          20,
  //          90,
  //          50,
  //          20,
  //          90,
  //          20,
  //        ],
  //      },
  //    ],
  //  };

  //  var linectx = document
  //    .getElementById("linegraph")
  //    .getContext("2d");
  //  window.myLine = new Chart(linectx, {
  //    type: "line",
  //    data: lineChartData,
  //    options: {
  //      responsive: true,
  //      legend: {
  //        display: false,
  //      },
  //      tooltips: {
  //        mode: "index",
  //        intersect: false,
  //      },
  //    },
  //  });

  // test

  //line
  var ctxL = document.getElementById("linegraph").getContext("2d");
  var myLineChart = new Chart(ctxL, {
    type: "line",
    data: {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "Consultation",
          data: [30, 59, 60, 65, 56, 55, 40],
          backgroundColor: ["rgb(80, 77, 166, .1)"],
          borderColor: ["rgba(80, 77, 166, .7)"],
          borderWidth: 2,
        },
        {
          label: "Patients",
          data: [50, 48, 40, 19, 86, 27, 90],
          backgroundColor: ["rgba(111, 209, 246, .1)"],
          borderColor: ["rgba(111, 209, 246, .7)"],
          borderWidth: 2,
        },
      ],
    },
    options: {
      responsive: true,
    },
  });

  // Bar Chart 2

  barChart();

  $(window).resize(function () {
    barChart();
  });

  function barChart() {
    $(".bar-chart")
      .find(".item-progress")
      .each(function () {
        var itemProgress = $(this),
          itemProgressWidth =
            $(this).parent().width() * ($(this).data("percent") / 100);
        itemProgress.css("width", itemProgressWidth);
      });
  }
});

//doughnut
var ctxD = document.getElementById("doughnutChart").getContext("2d");
var myLineChart = new Chart(ctxD, {
  type: "doughnut",
  data: {
    labels: ["Flue", "Pneumonia", "Diabetes", "Colds"],
    datasets: [
      {
        data: [40, 50, 100, 300],
        backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1"],
        hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5"],
      },
    ],
  },
  options: {
    responsive: true,
    cutoutPercentage: 85,
    legend: {
      position: "bottom",
      padding: 5,
      labels: { pointStyle: "circle", usePointStyle: true },
    },
  },
});
