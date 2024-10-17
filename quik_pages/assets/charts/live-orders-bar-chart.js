"use strict";

// Class definition
var LiveOrdersBarChart = function () {    
    var initChart = function () {
        // Get all elements with the class 'kt_project_list_chart'
        var elements = document.getElementsByClassName("live_orders_bar_chart");

        if (elements.length === 0) {
            return;
        }

        // Loop through all elements and initialize a chart for each one
        Array.from(elements).forEach(function(element) {
            var config = {
                type: 'bar',
                data: {
                    datasets: [{
                        data: [80, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
                        backgroundColor: ['#4FC9F3', '#1C3A6A']
                    }],
                },
                options: {
                    chart: {
                        fontFamily: 'inherit'
                    },
                    borderWidth: 0,
                    cutout: '75%',
                    cutoutPercentage: 65,
                    responsive: true,
                    maintainAspectRatio: false,
                    title: {
                        display: false
                    },
                    animation: {
                        animateScale: true,
                        animateRotate: true
                    },
                    stroke: {
                        width: 0
                    },
                    tooltips: {
                        enabled: false,
                    },
                    plugins: {
                        legend: {
                            display: false
                        }
                    }                
                }
            };

            var ctx = element.getContext('2d');
            new Chart(ctx, config);
        });
    }

    // Public methods
    return {
        init: function () {
            initChart();
        }
    }
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    LiveOrdersBarChart.init();
});
