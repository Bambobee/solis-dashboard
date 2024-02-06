/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title
} from 'chart.js';

import { Bar } from 'react-chartjs-2';

let initialState = {
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart'
      }
    }
  },
  data: {
    labels: ['Revenue', 'Unpaid', 'Loses', 'Paid'],
    datasets: [
      {
        label: '2021',
        data: [10, 11, 12, 13],
        backgroundColor: 'rgba(255, 99, 132, 0.5)'
      },
      {
        label: '2022',
        data: [20, 11, 14, 13],
        backgroundColor: 'rgba(53, 162, 235, 0.5)'
      }
    ]
  }
};

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

var cloneDeep = require('lodash.clonedeep');

export const LineChart = () => {
  const [chartData, setChartData] = useState(initialState);

  const [tableData, setTableData] = useState([
    ['Revenue', 'Unpaid', 'Loses', 'Paid'],
    [20, 11, 14, 13]
  ]);

  const handleHOTChange = (changes, source) => {
    if (source === 'loadData') {
      return; //don't save this change
    }

    let tableDataCopy = [...tableData];

    const [rowIdx, colIdx, oldVal, newVal] = changes[0];

    tableDataCopy[rowIdx][colIdx] = parseFloat(newVal);
    setTableData(tableDataCopy);

    const chartDataCopy = cloneDeep(chartData);
    chartDataCopy.data.datasets[rowIdx - 1].data = tableDataCopy[rowIdx];
    setChartData(chartDataCopy);
  };

  const data = {
    labels: ['Revenue', 'Unpaid', 'Loses', 'Paid'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(255, 206, 86, 1)'
        ],
        borderWidth: 1
      }
    ]
  };
  const options = {
    // scales: {
    //   yAxes: [
    //     {
    //       ticks: {
    //         beginAtZero: true,
    //       },
    //     },
    //   ],
    // },
    maintainAspectRatio: true
  };

  return (
    <div>
      <Bar options={chartData.options} data={chartData.data} />
    </div>
  );
};
