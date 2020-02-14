import React from 'react';

import { LineChart } from '@carbon/charts-react';
//import '@carbon/charts/styles.css';
import '@carbon/charts/styles/styles.scss';

const lineOptions = {
  title: 'Line',
  axes: {
    bottom: {
      title: '2019 Annual Sales Figures',
      scaleType: 'labels',
      secondary: true,
    },
    left: {
      primary: true,
    },
  },
  height: '500px',
};

const lineData = {
  labels: ['Qty', 'More', 'Sold', 'Restocking', 'Misc'],
  datasets: [
    {
      label: 'Dataset 1',
      data: [32100, 23500, 53100, 42300, 12300],
    },
    {
      label: 'Dataset 2',
      data: [34200, 53200, 42300, 21400, 0],
    },
    {
      label: 'Dataset 3',
      data: [41200, 23400, 34210, 1400, 42100],
    },
    {
      label: 'Dataset 4',
      data: [22000, 1200, 9000, 24000, 3000],
    },
    {
      label: 'Dataset 5',
      data: [2412, 30000, 10000, 5000, 31000],
    },
    {
      label: 'Dataset 6',
      data: [0, 20000, 40000, 60000, 80000],
    },
  ],
};

const LineCharts = () => (
  <div className="container-fluid">
    <div className="d-flex flex-row">
      <div className="col-sm-12">
        <LineChart data={lineData} options={lineOptions} />
      </div>
    </div>
  </div>
);

export default LineCharts;
