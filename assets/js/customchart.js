// chart 1 start
let expenses_options = {
    series: [44, 55, 41, 17, 15],
    labels: ['Salary', 'Electricity', 'Telephone', 'Printing', 'Transport'],
    colors: ['#114a82', '#00a31f', '#ffa900', '#08cafe', '#dc4c41'],
    chart: {
        type: 'donut',
    },
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: '100%',
                height: 300,
            },
            legend: {
                position: 'bottom'
            }
        }
    }]
};

let expenses = new ApexCharts(document.querySelector('#expences_chart_donut'), expenses_options);
expenses.render();
// chart 1 end

// chart 2 start
let monthly_turnover_options = {
    series: [{
        data: [400, 430, 448, 470, 540, 580],
    }],
    colors: ['#114a82'],
    chart: {
        type: 'bar',
        height: 200
    },
    plotOptions: {
        bar: {
            borderRadius: 0,
            horizontal: false,
        }
    },
    dataLabels: {
        enabled: false
    },
    xaxis: {
        categories: ['Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov'],
    }
};

let monthly_turnover = new ApexCharts(document.querySelector("#monthly_tournover_chart_bar"), monthly_turnover_options);
monthly_turnover.render();
// chart 2 end

// chart 3 start
let invoices_options = {
    series: [{
        data: [44, 55, 41, 64, 22, 43, 21]
    }, {
        data: [53, 32, 33, 52, 13, 44, 32]
    }],
    colors: ['#00a31f', '#08cafe'],
    chart: {
        type: 'bar',
        height: 200
    },
    plotOptions: {
        bar: {
            horizontal: false,
            dataLabels: {
                position: 'top',
            },
        }
    },
    dataLabels: {
        enabled: true,
        offsetX: -6,
        style: {
            fontSize: '12px',
            colors: ['#fff']
        }
    },
    stroke: {
        show: true,
        width: 1,
        colors: ['#fff']
    },
    tooltip: {
        shared: true,
        intersect: false
    },
    xaxis: {
        categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007],
    },
};

let total_invoices_paid = new ApexCharts(document.querySelector("#invoice_paid"), invoices_options);
total_invoices_paid.render();
// chart 3 end

// chart 4 start
var topFiveCustomers = {
    series: [{
        data: [50, 70, 80, 90, 95]
    }],
    chart: {
        type: 'bar',
        height: 250
    },
    plotOptions: {
        bar: {
            borderRadius: 4,
            horizontal: false,
        }
    },
    dataLabels: {
        enabled: false
    },
    xaxis: {
        categories: ['customer1', 'customer2', 'customer3', 'customer4', 'customer5'],
    }
};

var topFiveChart = new ApexCharts(document.querySelector("#top_five_customers"), topFiveCustomers);
topFiveChart.render();
// chart 4 end

// chart 5 start
var annualRecord = {
    series: [44, 55, 13, 43, 22],
    chart: {
        width: 380,
        type: 'pie',
    },
    labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
    colors: ['#114a82', '#00a31f', '#ffa900', '#08cafe', '#dc4c41'],
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: '100%',
                height: 300,
            },
            legend: {
                position: 'bottom'
            }
        }
    }]
};

var AnnualChart = new ApexCharts(document.querySelector("#annual_record"), annualRecord);
AnnualChart.render();
// chart 5 end