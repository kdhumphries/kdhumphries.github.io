import React from 'react';
//import { ChartLine32 } from '@carbon/icons-react';
import {
  Tabs,
  Tab,
} from 'carbon-components-react';
import ReactCharts from "../SampleCharts/ReactCharts";
import LineCharts from "../SampleCharts/LineChart";
import RepoPage from "../RepoPage/RepoPage"

const props = {
  tabs: {
    selected: 0,
    triggerHref: '#',
    role: 'navigation',
  },
  tab: {
    href: '#',
    role: 'presentation',
    tabIndex: 0,
  },
};

const SampleAnalyticsPage = () => {
  return (
    <div className="bx--grid bx--grid--full-width landing-page">
      <div className="bx--row landing-page__banner">
        <div className="bx--col-lg-16">
          <h1 className="landing-page__heading">
            Sample Reports
          </h1>
        </div>
      </div>
      <div className="bx--row landing-page__r2">
        <div className="bx--col bx--no-gutter">
          <Tabs {...props.tabs} aria-label="Tab navigation">
            <Tab {...props.tab} label="Simple Bar Chart">
              <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                <div className="bx--row landing-page__tab-content">
                  <div className="bx--col-lg-16">
                    <ReactCharts />
                  </div>
                </div>
              </div>
            </Tab>
            <Tab {...props.tab} label="Line Chart">
              <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                <div className="bx--row landing-page__tab-content">
                  <div className="bx--col-lg-16">
                    <LineCharts />
                  </div>
                </div>
              </div>
            </Tab>
            <Tab {...props.tab} label="Table">
              <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                <div className="bx--row landing-page__tab-content">
                  <div className="bx--col-lg-16">
                    <RepoPage />
                  </div>
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default SampleAnalyticsPage;
