import React from 'react';

import StyledButton from '../styledComponents/StyledButton';
import StyledHero from '../styledComponents/StyledHero';
import Page from '../layout/Page';

const Home = () => (
  <Page>
    <StyledHero>
      <h1>Fimento</h1>
      <h3>The cloud platform for financial services</h3>
      <p>
        Our mission is to provide better digital financial services.
        <br />
        Combining smart data analytics with a modular based architecture for ease of use and
        integration
      </p>
      <div>
        <StyledButton>Contact us</StyledButton>
      </div>
    </StyledHero>
  </Page>
);

export default Home;
