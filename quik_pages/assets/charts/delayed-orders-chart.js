"use strict";

// Class definition
var DelayedOrdersChart = function () {    
    var initChart = function () {
        // Get all elements with the class 'kt_project_list_chart'
        var elements = document.getElementsByClassName("delayed_orders_chart");

        if (elements.length === 0) {
            return;
        }

        // Loop through all elements and initialize a chart for each one
        Array.from(elements).forEach(function(element) {
            var config = {
                type: 'doughnut',
                data: {
                    datasets: [{
                        data: [50, 50],
                        backgroundColor: ['#FFB5B5', '#D48989']
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
    DelayedOrdersChart.init();
});
