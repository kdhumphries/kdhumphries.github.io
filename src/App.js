import React, { Component } from 'react';
import './app.scss';
import { Content } from 'carbon-components-react/lib/components/UIShell';
import TutorialHeader from './components/PortfolioHeader';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './content/LandingPage';
import SampleAnalyticsPage from './content/SampleAnalyticsPage';
import Footer from './content/LandingPage/Footer';

class App extends Component {
  render() {
    return (
      <>
        <TutorialHeader />
        <Content>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/analytics" component={SampleAnalyticsPage} />
          </Switch>
        </Content>
        <Footer />
      </>
    );
  }
}

export default App;
