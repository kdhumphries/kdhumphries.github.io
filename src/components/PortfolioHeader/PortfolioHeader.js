import React from 'react';
import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  SkipToContent,
} from 'carbon-components-react/lib/components/UIShell';
import { Link } from 'react-router-dom';

const PortfolioHeader = () => (
  <Header aria-label="Kevin D Humphries Portfolio Site">
    <SkipToContent />
    <HeaderName element={Link} to="/" prefix="">
      Overview
    </HeaderName>
    <HeaderNavigation aria-label="Analytics Sample">
      <HeaderMenuItem element={Link} to="/analytics">
        Analytics Sample
      </HeaderMenuItem>
    </HeaderNavigation>

  </Header>
);

export default PortfolioHeader;
