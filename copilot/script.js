// on window load
window.onload = function () {
    function getIncomeValues() {
        // get input value for januaryIncome
        var januaryIncome = document.getElementById('januaryIncome').value;
        // get input value for februaryIncome
        var februaryIncome = document.getElementById('februaryIncome').value;
        // get input value for marchIncome
        var marchIncome = document.getElementById('marchIncome').value;
        // get input value for aprilIncome
        var aprilIncome = document.getElementById('aprilIncome').value;
        // get input value for mayIncome
        var mayIncome = document.getElementById('mayIncome').value;
        // get input value for juneIncome
        var juneIncome = document.getElementById('juneIncome').value;
        // get input value for julyIncome
        var julyIncome = document.getElementById('julyIncome').value;
        // get input value for augustIncome
        var augustIncome = document.getElementById('augustIncome').value;
        // get input value for septemberIncome
        var septemberIncome = document.getElementById('septemberIncome').value;
        // get input value for octoberIncome
        var octoberIncome = document.getElementById('octoberIncome').value;
        // get input value for novemberIncome
        var novemberIncome = document.getElementById('novemberIncome').value;
        // get input value for decemberIncome
        var decemberIncome = document.getElementById('decemberIncome').value;

        return [januaryIncome, februaryIncome, marchIncome, aprilIncome, mayIncome, juneIncome, julyIncome, augustIncome, septemberIncome, octoberIncome, novemberIncome, decemberIncome];
    }

    function getExpenseValues() {
        // get input value for januaryExpense
        var januaryExpense = document.getElementById('januaryExpense').value;
        // get input value for februaryExpense
        var februaryExpense = document.getElementById('februaryExpense').value;
        // get input value for marchExpense
        var marchExpense = document.getElementById('marchExpense').value;
        // get input value for aprilExpense
        var aprilExpense = document.getElementById('aprilExpense').value;
        // get input value for mayExpense
        var mayExpense = document.getElementById('mayExpense').value;
        // get input value for juneExpense
        var juneExpense = document.getElementById('juneExpense').value;
        // get input value for julyExpense
        var julyExpense = document.getElementById('julyExpense').value;
        // get input value for augustExpense
        var augustExpense = document.getElementById('augustExpense').value;
        // get input value for septemberExpense
        var septemberExpense = document.getElementById('septemberExpense').value;
        // get input value for octoberExpense
        var octoberExpense = document.getElementById('octoberExpense').value;
        // get input value for novemberExpense
        var novemberExpense = document.getElementById('novemberExpense').value;
        // get input value for decemberExpense
        var decemberExpense = document.getElementById('decemberExpense').value;

        return [januaryExpense, februaryExpense, marchExpense, aprilExpense, mayExpense, juneExpense, julyExpense, augustExpense, septemberExpense, octoberExpense, novemberExpense, decemberExpense];
    }

    // create chartjs bar chart for id myChart
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [
                {
                    label: 'Expenses',
                    data: getExpenseValues(),
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(255, 99, 132, 1)',
                    ],
                    borderWidth: 1,
                },
                {
                    label: 'Income',
                    data: getIncomeValues(),
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                    ],
                    borderColor: [
                        'rgba(75, 192, 192, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(75, 192, 192, 1)',
                    ],
                    borderWidth: 1,
                }
            ],
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    }); // end of chartjs bar chart

    // click handler for download button
    document.getElementById('download').addEventListener('click', function () {
        // get canvas data
        var image = document.getElementById("myChart").toDataURL("image/png");
        // trigger download
        var link = document.createElement("a");
        link.download = 'myChart.png';
        link.href = image;
        link.click();
    });


    // click handler for chart-tab
    document.getElementById('chart-tab').addEventListener('click', function () {
        myChart.data.datasets[0].data = getExpenseValues();
        myChart.data.datasets[1].data = getIncomeValues();
        // update chart
        myChart.update();
    });
};