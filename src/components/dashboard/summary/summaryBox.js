/* eslint-disable react/prop-types */
// import './summary-box.scss';
import React from 'react';

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

import Box from 'components/box/Box';
const SummaryBox = ({ item }) => {
  return (
    <Box>
      <div className="summary-box">
        <div className="summary-box__info">
          <div className="summary-box__info__title">
            <div>{item.title}</div>
            <span>{item.subtitle}</span>
          </div>
          <div className="summary-box__info__value">{item.value}</div>
        </div>
        <div className="w-[3rem] h-[3rem]">
          <CircularProgressbar value={item.percent} strokeWidth={10}>
            <div className="summary-box__chart__value">{item.percent}%</div>
          </CircularProgressbar>
        </div>
      </div>
    </Box>
  );
};

export default SummaryBox;

export const SummaryBoxSpecial = ({ item }) => {
  const chartOptions = {
    responsive: true,
    scales: {
      xAxis: {
        display: false
      },
      yAxis: {
        display: false
      }
    },
    plugins: {
      legend: {
        display: false
      }
    },
    elements: {
      point: {
        radius: 3
      }
    }
  };

  const chartData = {
    labels: item.chartData.labels,
    datasets: [
      {
        label: 'Revenue',
        data: item.chartData.data,
        borderColor: '#fff',
        tension: 0.5
      }
    ]
  };
  return (
    <div className="bg-blue-300 h-[100%] my-auto w-[100%] rounded-[5px]">
      <div className="summary-box-special__title">{item.title}</div>
      <div className="summary-box-special__value">{item.value}</div>
      <div className="h-[80%]">
        <Line options={chartOptions} data={chartData} width={`250px`} />
      </div>
    </div>
  );
};
