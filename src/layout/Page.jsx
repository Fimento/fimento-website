import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from './Header';
import StyledPage from '../styled/layouts/StyledPage';
import GlobalStyle from '../styled/GlobalStyle';
import Footer from '../logic/layouts/Footer';
import CookieBanner from '../logic/layouts/CookieBanner';

const Page = ({ children }) => (
  <StyledPage>
    <Helmet>
      <title>Fimento</title>
      <meta name="description" content="Combining smart data analytics with modular based architecture for ease of use. Allowing faster time to market, less costs and increased personalization." />
    </Helmet>
    <GlobalStyle />
    <Header />
    {children}
    <Footer />
    <CookieBanner />
  </StyledPage>
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;
