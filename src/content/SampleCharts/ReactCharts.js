import React from 'react';

import { SimpleBarChart } from '@carbon/charts-react';
//import '@carbon/charts/styles.css';
import '@carbon/charts/styles/styles.scss';

const simpleBarOptions = {
  title: 'Simple bar',
  axes: {
    left: {
      primary: true,
    },
    bottom: {
      scaleType: 'labels',
      secondary: true,
    },
  },
  height: '400px',
};

const simpleBarData = {
  labels: ['Quantity', 'Leads', 'Sold', 'Restocking', 'Misc'],
  datasets: [
    {
      label: 'Dataset 1',
      data: [65000, 29123, 35213, 51213, 16932],
    },
  ],
  //{
  //    label: 'Dataset 2',
  //    data: [32432, 21312, 56456, 21312, 34234],
  //},
  //{
  //    label: 'Dataset 3',
  //    data: [12312, 23232, 34232, 12312, 34234],
  //},
};

const ReactCharts = () => (
  <div className="container-fluid">
    <div className="d-flex flex-row">
      <div className="col-sm-12">
        <SimpleBarChart data={simpleBarData} options={simpleBarOptions} />
      </div>
    </div>
  </div>
);

export default ReactCharts;
