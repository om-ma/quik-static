"use strict";

// Class definition
var LiveOrdersBarChart = function () {    
    var initChart = function () {
        // Get all elements with the class 'live_orders_bar_chart'
        var elements = document.getElementsByClassName("live_orders_bar_chart");

        if (elements.length === 0) {
            return;
        }

        // Determine border radius based on window width
        var isMobile = window.innerWidth < 768; // Adjust the breakpoint as necessary
        var borderRadiusValue = isMobile ? 5 : 10; // 5 for mobile, 10 for desktop

        // Generate labels for the current month from the 1st to the last day
        const generateCurrentMonthLabels = () => {
            const labels = [];
            const now = new Date();
            const year = now.getFullYear();
            const month = now.getMonth();

            // Get the last day of the current month
            const lastDay = new Date(year, month + 1, 0).getDate();

            for (let day = 1; day <= lastDay; day++) {
                labels.push(new Date(year, month, day).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }));
            }
            return labels;
        };

        // Generate random data for demonstration
        const generateRandomData = (length) => Array.from({ length }, () => Math.floor(Math.random() * 50) + 10);

        // Initialize days of the current month labels and random data points
        const labels = generateCurrentMonthLabels();
        const dataset1Data = generateRandomData(labels.length);
        const dataset2Data = generateRandomData(labels.length);

        // Loop through all elements and initialize a chart for each one
        Array.from(elements).forEach(function(element) {
            var config = {
                type: 'bar', // Set to 'bar' for a bar chart
                data: {
                    labels: labels, // Current month dynamic labels
                    datasets: [{
                        label: 'Dataset 1',
                        data: dataset1Data, // First set of data (bottom stack)
                        backgroundColor: '#4fc9f3',
                        borderColor: '#EFF2F5',
                        borderSkipped: false,
                        borderDash: [5, 5],
                    }, {
                        label: 'Dataset 2',
                        data: dataset2Data, // Second set of data (top stack)
                        backgroundColor: '#1c3a6a',
                        borderColor: '#EFF2F5',
                        borderRadius: { topLeft: borderRadiusValue, topRight: borderRadiusValue },
                        borderSkipped: false,
                        borderDash: [5, 5],
                    }],
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            stacked: true,
                            barPercentage: 0.5,
                            categoryPercentage: 0.5,
                            grid: {
                                display: false,
                                drawBorder: false,
                            },
                            ticks: {
                                padding: 10,
                            }
                        },
                        y: {
                            stacked: true,
                            grid: {
                                borderColor: '#EFF2F5',
                                borderDash: [5, 5],
                                drawBorder: false,
                            },
                            ticks: {
                                padding: 20,
                            }
                        }
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
