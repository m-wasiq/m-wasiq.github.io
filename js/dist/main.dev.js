"use strict";

$(function () {
  "use strict"; // Prealoder

  $(window).on('load', function (e) {
    // Loader
    $('.preloader').delay(500).fadeOut(500); // Chart

    var ctx = document.getElementById("chart").getContext('2d');
    var chartLabels = ['Plastic', 'Glass', 'Paper & Cardboard', 'Metal Cans', 'Miscelarious'];
    var chartData = [11, 28, 32, 8, 18];
    var chart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: chartLabels,
        datasets: [{
          backgroundColor: ["#A0ECD0", "#73E7ED", "#FF647C", "#FAC546", "#EAEFF5"],
          data: chartData
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        cutoutPercentage: 70,
        elements: {
          arc: {
            borderWidth: 0
          }
        },
        legend: {
          display: false
        },
        legendCallback: function legendCallback(chart) {
          var text = [];
          text.push('<ul class="0-legend">');
          var ds = chart.data.datasets[0];
          var sum = ds.data.reduce(function add(a, b) {
            return a + b;
          }, 0);

          for (var i = 0; i < ds.data.length; i++) {
            text.push('<li>'); // var perc = Math.round(100*ds.data[i]/sum,0);

            text.push('<span style="background-color:' + ds.backgroundColor[i] + '">' + '</span>' + chart.data.labels[i] + ' <b> ' + ds.data[i] + '% </b>');
            text.push('</li>');
          }

          text.push('</ul>');
          return text.join("");
        }
      }
    });
    var myLegendContainer = document.getElementById("legend_list"); // generate HTML legend

    myLegendContainer.innerHTML = chart.generateLegend(); // bind onClick event to all LI-tags of the legend

    var legendItems = myLegendContainer.getElementsByTagName('li');

    for (var i = 0; i < legendItems.length; i += 1) {
      legendItems[i].addEventListener("click", legendClickCallback, false);
    }

    function legendClickCallback(event) {
      event = event || window.event;
      var target = event.target || event.srcElement;

      while (target.nodeName !== 'LI') {
        target = target.parentElement;
      }

      var parent = target.parentElement;
      var chartId = parseInt(parent.classList[0].split("-")[0], 10);
      var chart = Chart.instances[chartId];
      var index = Array.prototype.slice.call(parent.children).indexOf(target);
      var meta = chart.getDatasetMeta(0);
      console.log(index);
      var item = meta.data[index];

      if (item.hidden === null || item.hidden === false) {
        item.hidden = true;
        target.classList.add('hidden');
      } else {
        target.classList.remove('hidden');
        item.hidden = null;
      }

      chart.update();
    }
  });
  $(document).ready(function () {
    $('#sb_now_hover').hover(function () {
      $("#sb_now").attr("class", "hover community_div");
    }, function () {
      $("#sb_now").attr("class", "community_div");
    });
    $('#sb_marketplace_hover').hover(function () {
      $("#sb_marketplace").attr("class", "hover community_div");
    }, function () {
      $("#sb_marketplace").attr("class", "community_div");
    });
    $('#sb_pro_hover').hover(function () {
      $("#sb_pro").attr("class", "hover community_div");
    }, function () {
      $("#sb_pro").attr("class", "community_div");
    });
    $('#sb_next_hover').hover(function () {
      $("#sb_next").attr("class", "hover community_div");
    }, function () {
      $("#sb_next").attr("class", "community_div");
    });
  }); // Counter Up

  $('.counter').counterUp({
    delay: 10,
    time: 3000
  });
});