import React from 'react';
//import { ChartLine32 } from '@carbon/icons-react';
import { Breadcrumb, BreadcrumbItem, Tabs, Tab } from 'carbon-components-react';
import ReactCharts from '../SampleCharts/ReactCharts';
import LineCharts from '../SampleCharts/LineChart';
import RepoPage from '../RepoPage/RepoPage';

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

const LandingPage2 = () => {
  return (
    <div className="bx--grid bx--grid--full-width landing-page">
      <div className="bx--row landing-page__banner">
        <div className="bx--col-lg-16">
          <Breadcrumb noTrailingSlash aria-label="Page navigation">
            <BreadcrumbItem>
              <a href="/">Getting started</a>
            </BreadcrumbItem>
          </Breadcrumb>
          <h1 className="landing-page__heading">Sample Analytics</h1>
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
      <div className="bx--row landing-page__r3">
        <div className="bx--col-md-4 bx--col-lg-4">
          <h3 className="landing-page__label">Something</h3>
        </div>
        <div className="bx--col-md-4 bx--col-lg-4">something else</div>
        <div className="bx--col-md-4 bx--col-lg-4">something else</div>
        <div className="bx--col-md-4 bx--col-lg-4">something else</div>
      </div>
    </div>
  );
};

export default LandingPage2;
